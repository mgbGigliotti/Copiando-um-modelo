let idade = [18, 21];
console.log (idade);

idade.push(12);
console.log(idade);

idade.pop();
console.log(idade);

console.log(idade[0]);
console.log(idade[1]);
console.log(idade.length);

console.log(idade[1] + idade[0]);

var retangulo1 = {
    x : 0,
    y : 0,
    largura : 30,
    altura : 20,
    cor: "red"
};
var retangulo2 = {
    x : 100,
    y : 100,
    largura : 30,
    altura : 20,
    cor: "blue"
};

// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.fillRect(10,10,50,50);
// ctx.strokeRect(10,10,50,50);
// ctx.closePath();
	
// ctx.beginPath ();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokestyle = 'red';
// ctx.moveTo (200,150);
// ctx.lineTo (60,10);
// ctx.lineTo (60,250);
// ctx.lineTo (200,250);
// ctx.lineTo (200,150);
// ctx. fill () ;
// ctx.stroke () ;
// ctx.closePath ();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.font = "90px Arial"
// ctx.textAlign = "center";
// ctx.fillText("Olá",200,350);
// ctx.strokeText("Olá",200,350)
// ctx.closePath();


let ex1 = document.getElementById('ex1');
let ctx1 = canvas.getContext('2d');

ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.fillStyle = 'red';
ctx1.fillRect(0,0,50,50);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.fillStyle = 'blue';
ctx1.fillRect(450,0,50,50);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.fillStyle = 'yellow';
ctx1.fillRect(0,450,50,50);
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.fillStyle = 'green';
ctx1.fillRect(450,450,50,50);
ctx1.closePath();

ctx1.beginPath();
ctx1.strokeStyle = "red";
ctx1.moveTo(0, 0);
ctx1.lineTo(500, 500);
ctx1.stroke();

ctx1.beginPath();
ctx1.strokeStyle = "blue";
ctx1.moveTo(500, 0);
ctx1.lineTo(0, 500);
ctx1.stroke();

ctx1.beginPath();
ctx1.strokeStyle = "green";
ctx1.moveTo(0, 250);
ctx1.lineTo(500, 250);
ctx1.stroke();

ctx1.beginPath();
ctx1.strokeStyle = "green";
ctx1.arc(250, 250, 60, 0, Math.PI);
ctx1.stroke();

ctx1.beginPath();
ctx1.fillStyle = "yellow";
ctx1.arc(50, 150, 20, 0, Math.PI * 2);
ctx1.fill();
ctx1.strokeStyle = "green";
ctx1.stroke();

ctx1.beginPath();
ctx1.fillStyle = "yellow";
ctx1.arc(450, 150, 20, 0, Math.PI * 2);
ctx1.fill();
ctx1.strokeStyle = "green";
ctx1.stroke();

ctx1.fillStyle = "black";
ctx1.font = "20px Arial";
ctx1.textAlign = "center";
ctx1.fillText("Desenvolvimento Web", 250, 80);




const c2 = document.getElementById("canvas2");
const ctx2 = c2.getContext("2d");

// céu
ctx2.fillStyle = "#87CEB6";
ctx2.fillRect(0, 0, 400, 400);

// chão
ctx2.fillStyle = "gray";
ctx2.fillRect(0, 300, 400, 100);

// água (canto inferior esquerdo)
ctx2.fillStyle = "#5A84D6";
ctx2.beginPath();
ctx2.fillRect(0, 350, 150, 50)

ctx2.fillStyle = "#5A84D6";
ctx2.beginPath();
ctx2.fillRect(0, 300, 50, 100)

ctx2.fillStyle = "#5A84D6";
ctx2.beginPath();
ctx2.arc(0, 300, 50, 0, Math.PI * 2);
ctx2.fill();

ctx2.fillStyle = "#5A84D6";
ctx2.beginPath();
ctx2.arc(150, 400, 50, 0, Math.PI * 2);
ctx2.fill();

// sol
ctx2.fillStyle = "yellow";
ctx2.beginPath();
ctx2.arc(300, 100, 50, 0, Math.PI * 2);
ctx2.fill();

// casa (base)
ctx2.fillStyle = "#8B4513";
ctx2.fillRect(150, 200, 100, 100);

// telhado
ctx2.fillStyle = "#E76F51";
ctx2.beginPath();
ctx2.moveTo(150, 200);
ctx2.lineTo(200, 150);
ctx2.lineTo(250, 200);
ctx2.closePath();
ctx2.fill();

// porta
ctx2.fillStyle = "#5C3A1E";
ctx2.fillRect(185, 240, 30, 60);

// janelas
ctx2.fillStyle = "#87CEFA";
ctx2.fillRect(155, 210, 30, 30);
ctx2.fillRect(215, 210, 30, 30);

// árvore esquerda
ctx2.fillStyle = "#8B4513";
ctx2.fillRect(50, 240, 20, 60);

ctx2.fillStyle = "green";
ctx2.beginPath();
ctx2.arc(60, 230, 30, 0, Math.PI * 2);
ctx2.fill();

// árvore direita
ctx2.fillStyle = "#8B4513";
ctx2.fillRect(330, 260, 20, 60);

ctx2.fillStyle = "green";
ctx2.beginPath();
ctx2.arc(340, 250, 30, 0, Math.PI * 2);
ctx2.fill();    