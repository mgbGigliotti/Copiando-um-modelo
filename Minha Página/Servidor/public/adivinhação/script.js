let numeroSecreto = Math.floor(Math.random() * 100);
let listaChutes = [];

function verificar() {
    let input = document.getElementById("inputNumero");
    let valor = Number(input.value);
    let mensagem = document.getElementById("mensagem");
    let chutes = document.getElementById("chutes");
    let container = document.getElementById("container");

    if (input.value === "" || valor < 0 || valor > 99) {
        mensagem.innerText = "Digite um número válido de 0 a 99.";
        mensagem.style.color = "red";
        return;
    }

    listaChutes.push(valor);
    chutes.innerText = listaChutes.join(", ");

    if (valor == numeroSecreto) {
        mensagem.innerText = "Você acertou!";
        mensagem.style.color = "green";
        container.style.setProperty("background-color", "#b6f5b6");
    } else if (valor < numeroSecreto) {
        mensagem.innerText = "Errou! É maior.";
        mensagem.style.color = "red";
        container.style.setProperty("background-color", "#ffb3b3");
    } else {
        mensagem.innerText = "Errou! É menor.";
        mensagem.style.color = "red";
        container.style.setProperty("background-color", "#ffb3b3");
    }

    input.value = "";
    input.focus();
}