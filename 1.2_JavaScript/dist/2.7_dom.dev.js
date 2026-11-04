"use strict";

// DOM (Document Object Model): acessando e alterando elementos da pagina
var titulo = document.querySelector("#titulo");
var botao = document.querySelector("#botao");
var lista = document.querySelector("#lista");
var campoTexto = document.querySelector("#novaTarefa"); // Alterando texto e estilo de um elemento

titulo.textContent = "Minhas tarefas";
titulo.classList.add("destaque"); // Respondendo a um evento de clique

botao.addEventListener("click", function () {
  var texto = campoTexto.value.trim();

  if (texto === "") {
    campoTexto.focus();
    return;
  }

  var item = document.createElement("li");
  item.textContent = texto;
  lista.append(item);
  campoTexto.value = "";
  campoTexto.focus();
});