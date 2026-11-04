"use strict";

// Callback e uma funcao passada como argumento para outra funcao
function processarNome(nome, callback) {
  var nomeFormatado = nome.trim().toUpperCase();
  callback(nomeFormatado);
}

function mostrarSaudacao(nome) {
  console.log("Ola, ".concat(nome, "!"));
} // Passando mostrarSaudacao como callback


processarNome("  Ana  ", mostrarSaudacao); // Uma funcao anonima tambem pode ser usada como callback

processarNome("bruno", function (nome) {
  console.log("Bem-vindo(a), ".concat(nome, "!"));
}); // Metodos de array tambem recebem callbacks

var numeros = [1, 2, 3];
numeros.forEach(function (numero) {
  console.log("Numero: ".concat(numero));
});