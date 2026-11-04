"use strict";

// classList: controlando a aparencia dos elementos com JavaScript
var cartao = document.querySelector("#cartao");
var botao = document.querySelector("#botao");
var mensagem = document.querySelector("#mensagem"); // add adiciona uma classe CSS ao elemento

cartao.classList.add("cartao");
botao.addEventListener("click", function () {
  // toggle alterna a classe: adiciona se nao existir, remove se existir
  var destacado = cartao.classList.toggle("destacado"); // contains verifica se a classe esta aplicada

  if (cartao.classList.contains("destacado")) {
    mensagem.textContent = "Destaque ativado";
  } else {
    mensagem.textContent = "Destaque desativado";
  }

  console.log("O cartao esta destacado?", destacado);
}); // remove retira uma classe CSS do elemento

var botaoRemover = document.querySelector("#remover");
botaoRemover.addEventListener("click", function () {
  cartao.classList.remove("destacado");
  mensagem.textContent = "A aparencia original foi restaurada";
});