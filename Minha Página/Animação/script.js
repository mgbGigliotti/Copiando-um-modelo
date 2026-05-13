var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.src = "ball.png";

var bola = {
    x: 100,
    y: 100,
    w: 60,
    h: 60
};

function desenha_bola(){
    ctx.drawImage(img, bola.x, bola.y, bola.w, bola.h);
}

function desenhar(){
    ctx.clearRect(0,0,300,300);

    desenha_bola();

    requestAnimationFrame(desenhar);
}

document.addEventListener("mousemove", function(evento){
    var rect = canvas.getBoundingClientRect();

    bola.x = evento.clientX - rect.left - bola.w / 2;
    bola.y = evento.clientY - rect.top - bola.h / 2;

    if (bola.x < 0) bola.x = 0  //limita a bola para que ela nao saia de dentro do canvas//
    if (bola.y < 0) bola.y = 0  //limita a bola para que ela nao saia de dentro do canvas//

    if (bola.x > canvas.width - bola.w) { //limita a bola para que ela nao saia de dentro do canvas//
        bola.x = canvas.width - bola.w;
    }

    if (bola.y > canvas.height - bola.h) { //limita a bola para que ela nao saia de dentro do canvas//
        bola.y = canvas.height - bola.h;
    }
}); 

img.onload = function() { //executa uma função após carregar//
    desenhar();
};
