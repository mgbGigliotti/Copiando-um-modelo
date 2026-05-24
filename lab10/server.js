var http = require("http");
var express = require("express");
var app = express();

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

// pode mudar para a versão do site
const uri = "mongodb+srv://dbUser:SenhaBolada@cluster0.v1dast6.mongodb.net/?appName=Cluster0"
//const uri = "mongodb://localhost:27017"

const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("lab10_bd");
var blog = dbo.collection("blog");
var carro = dbo.collection("carro");
var usuario = dbo.collection("usuarios");

app.set("view engine", "ejs");

let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./Public"));

var server = http.createServer(app);

server.listen(80);

console.log("Servidor Ativo...");

app.get("/", function(req, res){
    res.redirect("Projetos.html");
});

app.get('/cadastra', function(req, res){
    res.sendFile(__dirname + "/Public/Cadastro.html");
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + "/Public/Login.html");
});

app.post('/cadastro', function(req, res){

    var nome = req.body.nome;
    var login = req.body.login;
    var senha = req.body.senha;

    res.render('resposta', {nome,login, status:""});
});

app.post('/login', function(req, res){

    var login = req.body.login;
    var senha = req.body.senha;
    if(login == "admin" && senha == "123"){
        res.render('resposta', {
            status: "Login realizado com sucesso",
            nome:"",
            login
        });
    } else {
        res.render('resposta', {
            status: "Login inválido",
            nome:"",
            login
        });
    }
});


app.get("/cadastrar_post", function(req, res){
    res.sendFile(__dirname + "/Public/Blog/cadastrarpost.html");
});


app.post('/novo_post', function(req, res){
    var titulo = req.body.titulo;
    var resumo = req.body.resumo;
    var conteudo = req.body.conteudo;
    var data = {
        titulo: titulo,
        resumo: resumo,
        conteudo: conteudo
    };
    blog.insertOne(data, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("/blog");
        }
    });
});

app.get('/blog', function(req, res){
    blog.find({}).toArray(function(err, posts){
        if(err){
            console.log(err);
        } else {
            res.render('blog', {
                posts: posts
            });
        }
    });
});

app.post('/cadastrocarro', function(req,res){
    var login = req.body.login;
    var senha = req.body.senha;
    var nome = req.body.nome;
    var data = {login: login, senha: senha, nome: nome};
    usuario.insertOne(data, function(err){
        if(err){
            console.log(err);
        } else{
            res.redirect('Carros/logincarro.html');
        }
    });
});

app.post('/logincarro', function(req,res){
    var login = req.body.login;
    var senha = req.body.senha;
    var data = {login: login, senha: senha}

    usuario.find(data).toArray(function(err, items){
    console.log(items);
    if(items.length == 0) {
            res.render("respostalogin", {resposta: "Usuário/Senha não encontrados!"})
        } else if (err){
            res.render("respostalogin", {resposta: "Erro ao logar usuário"})
        } else {
            res.redirect("carrolistagem")
        };
    });
})

app.get('/gerenciarcarros', function(req, res){
    res.sendFile(__dirname + "/Public/Carros/carrogerencia.html");
});
app.get('/carrologin', function(req, res){
    res.sendFile(__dirname + "/Public/Carros/logincarro.html");
});
app.get('/cadastrarcarro', function(req, res){
    res.sendFile(__dirname + "/Public/Carros/cadastrocarro.html");
});


app.get('/carrolistagem', function(req, res){
    carro.find({}).toArray(function(err, items){
        if(err){
            console.log(err);
        } else {
            res.render('carrolistagem', {
                carros: items
            });
        }
    });
});

app.post('/novocarro', function(req, res){

    var marca = req.body.marca;
    var modelo = req.body.modelo;
    var ano = req.body.ano;
    var qtde = parseInt(req.body.qtde);
    var data = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        qtde: qtde
    };
    carro.insertOne(data, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("gerenciarcarros")
        }
    });
});

app.post('/removercarro', function(req, res){
    var data = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano
    };
    carro.deleteOne(data, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect('/carrolistagem');
        }
    });
});

app.post('/atualizarcarro', function(req, res){
    var filtro = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano
    };
    var novaQtde = parseInt(req.body.qtdenovo);
    var novosDados = {
        $set: {
            marca: req.body.marcanovo,
            modelo: req.body.modelonovo,
            ano: req.body.anonovo,
            qtde: novaQtde,
            esgotado: novaQtde == 0
        }
    };
    carro.updateOne(filtro, novosDados, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect('/carrolistagem');
        }

    });

});

app.post('/vendercarro', function(req, res){
    var filtro = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano
    };
    carro.findOne(filtro, function(err, item){
        if(err || !item){
            res.redirect('/carrolistagem')
        } else {
            var novaQtde = item.qtde - 1;
            if(novaQtde < 0){
                novaQtde = 0;
            }
            carro.updateOne(
                filtro,
                {
                    $set: {
                        qtde: novaQtde,
                        esgotado: novaQtde == 0
                    }
                },
                function(err){
                    if(err){
                        console.log(err);
                    } else {
                        res.redirect('/carrolistagem');
                    }

                }
            );
        }
    });
});