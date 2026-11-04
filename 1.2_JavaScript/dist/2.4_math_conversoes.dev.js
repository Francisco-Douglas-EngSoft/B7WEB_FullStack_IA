"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Números e operações matemáticas
var preco = 19.9;
var quantidade = 3;
console.log(preco + quantidade); // Soma: 22.9

console.log(preco * quantidade); // Multiplicação: 59.7

console.log(preco / quantidade); // Divisão

console.log(10 % 3); // Resto da divisão: 1
// Métodos do objeto Math

var nota = 7.6;
console.log(Math.round(nota)); // Arredonda para o inteiro mais próximo: 8

console.log(Math.floor(nota)); // Arredonda para baixo: 7

console.log(Math.ceil(nota)); // Arredonda para cima: 8

console.log(Math.max(4, 12, 8)); // Maior valor: 12

console.log(Math.min(4, 12, 8)); // Menor valor: 4

console.log(Math.pow(2, 3)); // Potência: 2 elevado a 3

console.log(Math.sqrt(81)); // Raiz quadrada: 9

console.log(Math.random()); // Número aleatório entre 0 (inclusivo) e 1 (exclusivo)
// Conversões de tipo

var numeroTexto = "42.5";
var numero = Number(numeroTexto);
console.log(numero, _typeof(numero)); // 42.5 "number"

var inteiroTexto = "42.5";
console.log(parseInt(inteiroTexto)); // Converte para inteiro: 42

console.log(parseFloat(inteiroTexto)); // Converte para decimal: 42.5

var idade = 25;
var idadeTexto = String(idade);
console.log(idadeTexto, _typeof(idadeTexto)); // "25" "string"

var valorInvalido = Number("abc");
console.log(Number.isNaN(valorInvalido)); // true: o texto não pode ser convertido em número