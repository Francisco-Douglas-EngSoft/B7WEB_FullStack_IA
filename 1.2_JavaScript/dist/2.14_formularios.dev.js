"use strict";

// Formularios: capturar, validar e dar feedback com DOM
var formulario = document.querySelector("#formulario");
var campoNome = document.querySelector("#nome");
var campoEmail = document.querySelector("#email");
var feedback = document.querySelector("#feedback");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  var nome = campoNome.value.trim();
  var email = campoEmail.value.trim();

  if (nome === "") {
    feedback.textContent = "Informe seu nome.";
    campoNome.focus();
    return;
  }

  if (!campoEmail.validity.valid || email === "") {
    feedback.textContent = "Informe um endereco de e-mail valido.";
    campoEmail.focus();
    return;
  }

  feedback.textContent = "Formulario enviado. Obrigado, ".concat(nome, "!");
  formulario.reset();
});