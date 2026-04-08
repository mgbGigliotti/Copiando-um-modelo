

function desenhar_quadrado(ctx, x, y, largura, altura, corPreenchimento, corBorda = null, espessuraBorda = 1) {
  ctx.beginPath();
  ctx.rect(x, y, largura, altura);
  ctx.fillStyle = corPreenchimento;
  ctx.fill();

  if (corBorda) {
    ctx.lineWidth = espessuraBorda;
    ctx.strokeStyle = corBorda;
    ctx.stroke();
  }
}

function desenhar_linha(ctx, x1, y1, x2, y2, cor, espessura = 1) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = espessura;
  ctx.strokeStyle = cor;
  ctx.stroke();
}

function desenhar_arco(ctx, x, y, raio, anguloInicial, anguloFinal, cor, espessura = 1, preencher = false, corPreenchimento = null) {
  ctx.beginPath();
  ctx.arc(x, y, raio, anguloInicial, anguloFinal);

  if (preencher && corPreenchimento) {
    ctx.fillStyle = corPreenchimento;
    ctx.fill();
  }

  ctx.lineWidth = espessura;
  ctx.strokeStyle = cor;
  ctx.stroke();
}

function escrever(ctx, texto, x, y, cor = "#444", fonte = "25px Arial", alinhamento = "center") {
  ctx.fillStyle = cor;
  ctx.font = fonte;
  ctx.textAlign = alinhamento;
  ctx.textBaseline = "middle";
  ctx.fillText(texto, x, y);
}


function desenhar_circulo(ctx, x, y, raio, corPreenchimento, corBorda = null, espessuraBorda = 1) {
  desenhar_arco(
    ctx,
    x,
    y,
    raio,
    0,
    Math.PI * 2,
    corBorda || corPreenchimento,
    espessuraBorda,
    true,
    corPreenchimento
  );
}

function desenhar_poligono(ctx, pontos, corPreenchimento, corBorda = null, espessuraBorda = 1) {
  if (pontos.length === 0) return;

  ctx.beginPath();
  ctx.moveTo(pontos[0].x, pontos[0].y);

  for (let i = 1; i < pontos.length; i++) {
    ctx.lineTo(pontos[i].x, pontos[i].y);
  }

  ctx.closePath();
  ctx.fillStyle = corPreenchimento;
  ctx.fill();

  if (corBorda) {
    ctx.lineWidth = espessuraBorda;
    ctx.strokeStyle = corBorda;
    ctx.stroke();
  }
}



function desenharFigura1() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  const s = 300 / 400;
  const scale = (v) => v * s;

  // Fundo
  desenhar_quadrado(ctx, 0, 0, 300, 300, "#f2f2f2");

  // Borda externa
  desenhar_quadrado(ctx, 0.5, 0.5, 299, 299, "rgba(0,0,0,0)", "#bfbfbf", 1);

  // Quadrados do topo
  desenhar_quadrado(ctx, 0, 0, scale(68), scale(68), "#0b00ff");
  desenhar_quadrado(ctx, 300 - scale(68), 0, scale(68), scale(68), "#ff1010");

  // Texto
  escrever(ctx, "Canvas", 150, scale(58), "#444444", "19px Arial");

  // Linhas diagonais
  desenhar_linha(ctx, scale(68), scale(68), 150, 150, "#5669ff", 1.5);
  desenhar_linha(ctx, 300 - scale(68), scale(68), 150, 150, "#ff6060", 1.5);

  // Arcos superiores
  desenhar_arco(ctx, 150, 150, scale(79), Math.PI, 0, "#78be78", 1.5);
  desenhar_arco(ctx, 150, 150, scale(108), Math.PI, 0, "#78be78", 1.5);

  // Círculo azul superior
  desenhar_circulo(ctx, 150, scale(154), scale(19), "#1fe3ef", "#4f63ff", 2);

  // Linha horizontal central
  desenhar_linha(ctx, 0, 150, 300, 150, "#78be78", 1.5);

  // Retângulos ciano laterais
  desenhar_quadrado(ctx, 0, scale(162), scale(41), scale(80), "#19e5e8");
  desenhar_quadrado(ctx, 300 - scale(41), scale(162), scale(41), scale(80), "#19e5e8");

  // Quadrado vermelho central
  desenhar_quadrado(ctx, 150 - scale(20), 150, scale(41), scale(42), "#ff1717");

  // Linha vertical cinza
  desenhar_linha(ctx, 150, scale(242), 150, 300, "#8d8d8d", 1.5);

  // Círculos amarelos
  desenhar_circulo(ctx, scale(95), scale(324), scale(19), "#f0f500", "#79b86d", 2);
  desenhar_circulo(ctx, scale(307), scale(324), scale(19), "#f0f500", "#79b86d", 2);

  // Arcos inferiores
  desenhar_arco(ctx, 150, 300, scale(76), Math.PI, 0, "#78be78", 1.5);
  desenhar_arco(ctx, 150, 300, scale(53), Math.PI, 0, "#78be78", 1.5);

  // Semicírculo ciano inferior
  ctx.beginPath();
  ctx.arc(150, 300, scale(53), Math.PI, 2 * Math.PI);
  ctx.lineTo(150 + scale(53), 300);
  ctx.lineTo(150 - scale(53), 300);
  ctx.closePath();
  ctx.fillStyle = "#1fe3ef";
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "#78be78";
  ctx.stroke();

  // Canto amarelo em L
  desenhar_quadrado(ctx, 0, 300 - scale(51), scale(41), scale(51), "#f3f300");
  desenhar_quadrado(ctx, scale(41), 300 - scale(21), scale(40), scale(21), "#f3f300");

  // Canto preto em L
  desenhar_quadrado(ctx, 300 - scale(41), 300 - scale(51), scale(41), scale(51), "#000000");
  desenhar_quadrado(ctx, 300 - scale(81), 300 - scale(21), scale(40), scale(21), "#000000");
}



function desenharFigura2() {
  const canvas = document.getElementById("canvas2");
  const ctx = canvas.getContext("2d");

  const s = 400 / 530;
  const scale = (v) => v * s;

  // Céu
  desenhar_quadrado(ctx, 0, 0, 400, 400, "#88dfc1");

  // Sol
  desenhar_circulo(ctx, scale(400), scale(91), scale(67), "#f2f71c");

  // Chão
  desenhar_quadrado(ctx, scale(65), scale(395), scale(465), scale(135), "#919191");

  // Lago à esquerda
  desenhar_circulo(ctx, scale(-2), scale(430), scale(64), "#4c88e8");
  desenhar_quadrado(ctx, 0, scale(430), scale(65), 400 - scale(430), "#4c88e8");
  desenhar_quadrado(ctx, 0, scale(395), scale(65), scale(35), "#4c88e8");
  desenhar_quadrado(ctx, 100, scale(700), scale(80), scale(70),"#4c88e8" )

  // Continuação da água na parte de baixo
  ctx.beginPath();
  ctx.moveTo(scale(65), scale(496));
  ctx.lineTo(scale(195), scale(496));
  ctx.arc(scale(195), 400, scale(69), -Math.PI / 2, Math.PI, false);
  ctx.closePath();
  ctx.fillStyle = "#4c88e8";
  ctx.fill();

  // Casa
  desenhar_quadrado(ctx, scale(198), scale(232), scale(133), scale(163), "#944d17");

  // Telhado
  desenhar_poligono(
    ctx,
    [
      { x: scale(198), y: scale(232) },
      { x: scale(331), y: scale(232) },
      { x: scale(264.5), y: scale(165) }
    ],
    "#f26b4f"
  );

  // Porta
  desenhar_quadrado(ctx, scale(252), scale(262), scale(28), scale(133), "#734d23");

  // Janelas
  desenhar_quadrado(ctx, scale(212), scale(260), scale(39), scale(39), "#5ec2ff");
  desenhar_quadrado(ctx, scale(279), scale(260), scale(39), scale(39), "#5ec2ff");

  // Árvore esquerda
  desenhar_quadrado(ctx, scale(65), scale(304), scale(26), scale(91), "#924d19");
  desenhar_circulo(ctx, scale(78), scale(304), scale(40), "#329320");

  // Árvore direita
  desenhar_quadrado(ctx, scale(466), scale(365), scale(26), scale(95), "#924d19");
  desenhar_circulo(ctx, scale(479), scale(365), scale(40), "#329320");
}


desenharFigura1();
desenharFigura2();