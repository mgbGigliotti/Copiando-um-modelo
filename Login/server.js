
require("colors")  
var http = require("http")
var express = require("express")
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const mongoclient = mongodb.MongoClient;
const uri = "mongodb+srv://mgbgigliotti:CHB8MVN@cluster0.fzwix1n.mongodb.net/?appName=Cluster0"
const client = new mongoclient (uri,{useNewUrlParser: true})

var dbo = client.db("Exemplo_bd")
var usuarios = dbo.collection("Usuarios")

var app = express()
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine','ejs')
app.set('views', './views');


var server = http.createServer(app)
server.listen(80)

console.log("Servidor Rodando...".rainbow)

app.get("/", function(req, res){
    res.redirect("home.html")
})

app.get ("/inicio", function(req, res){
    var text = req.query.text;
    var number = req.query.number;
    var color = req.query.color;
    var check = req.query.cb;
    var radio = req.query.rd;
    console.log(text, number, color, check, radio);
    console.log("requisição feita por GET")
})

app.post("/inicio", function(req,res){
    var text = req.body.text;
    var number = req.body.number;
    var color = req.body.color;
    var check = req.body.cb;
    var radio = req.body.rd;
    console.log(text, number, color, check, radio);
    console.log("requisição feita por POST")
})

app.post("/cadastro", function(req,res){
    var Nome = req.body.Nome;
    var Login = req.body.Login;
    var Senha = req.body.Senha;

    console.log(Nome, Login, Senha);

    res.render("resposta.ejs", {resposta: "Usuário cadastrado com sucesso!"})
})

app.get("/for", function(req,res){
    var qtde = req.query.qtde;
    res.render("exemplo_for.ejs",{qtde})
})

app.post("/cadastrar_usuario", function(req,resp){
    
    var data = {
        db_nome: req.body.nome,
        db_login: req.body.login,
        db_senha: req.body.senha
    }
    usuarios.insertOne(data, function (err) {
        console.log(err);
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });
 })


app.post("/logar_usuario", function(req, resp) {
    var data = {db_login: req.body.login, db_senha: req.body.senha };

    usuarios.find(data).toArray(function(err, items) {
      console.log(items);
      if (items.length == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
      };
    });

  });