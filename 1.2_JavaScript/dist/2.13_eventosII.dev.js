"use strict";

// Eventos II: input e keydown
var campoTexto = document.querySelector("#campoTexto");
var textoDigitado = document.querySelector("#textoDigitado");
var teclaPressionada = document.querySelector("#teclaPressionada"); // input ocorre sempre que o valor do campo e alterado

campoTexto.addEventListener("input", function (event) {
  textoDigitado.textContent = event.currentTarget.value || "(vazio)";
}); // keydown ocorre quando uma tecla e pressionada

campoTexto.addEventListener("keydown", function (event) {
  teclaPressionada.textContent = "Tecla: ".concat(event.key);

  if (event.key === "Enter") {
    textoDigitado.textContent = "Voce confirmou: ".concat(event.currentTarget.value);
  }
});