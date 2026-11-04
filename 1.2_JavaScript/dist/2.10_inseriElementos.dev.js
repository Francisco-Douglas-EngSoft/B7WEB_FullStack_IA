"use strict";

// Criando, inserindo e removendo elementos com DOM
var formulario = document.querySelector("#formulario");
var campoTarefa = document.querySelector("#tarefa");
var lista = document.querySelector("#lista");
var mensagem = document.querySelector("#mensagem");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  var texto = campoTarefa.value.trim();

  if (texto === "") {
    mensagem.textContent = "Digite uma tarefa antes de adicionar.";
    campoTarefa.focus();
    return;
  } // createElement cria um elemento que ainda nao esta na pagina


  var item = document.createElement("li");
  var textoItem = document.createElement("span");
  var botaoRemover = document.createElement("button");
  textoItem.textContent = texto;
  botaoRemover.type = "button";
  botaoRemover.textContent = "Remover";
  botaoRemover.addEventListener("click", function () {
    // remove retira o elemento e seus descendentes da pagina
    item.remove();
  });
  item.append(textoItem, " ", botaoRemover); // prepend insere o novo item no inicio da lista

  lista.prepend(item);
  campoTarefa.value = "";
  mensagem.textContent = "Tarefa adicionada.";
  campoTarefa.focus();
});