"use strict";

// Eventos I: addEventListener, click e o objeto event
var botao = document.querySelector("#botao");
var contador = document.querySelector("#contador");
var resultado = document.querySelector("#resultado");
var cliques = 0; // addEventListener registra uma funcao para executar quando o evento ocorrer.
// O objeto event e recebido como argumento pelo callback.

botao.addEventListener("click", function (event) {
  cliques++;
  contador.textContent = cliques;
  resultado.textContent = "Evento: ".concat(event.type, "; elemento clicado: ").concat(event.currentTarget.id);
  console.log("Alvo original do clique:", event.target);
  console.log("Elemento que recebeu o listener:", event.currentTarget);
});