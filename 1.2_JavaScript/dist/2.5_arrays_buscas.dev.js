"use strict";

// Arrays: iteracao e busca
var frutas = ["maca", "banana", "laranja", "uva"]; // Acessando um elemento pelo indice (o primeiro indice e 0)

console.log(frutas[0]); // maca
// Percorrendo o array com for

for (var i = 0; i < frutas.length; i++) {
  console.log("".concat(i, ": ").concat(frutas[i]));
} // Percorrendo o array com forEach


frutas.forEach(function (fruta, indice) {
  console.log("Fruta ".concat(indice + 1, ": ").concat(fruta));
}); // Verificando se um valor existe

console.log(frutas.includes("banana")); // true

console.log(frutas.includes("pera")); // false
// Encontrando a posicao de um valor

console.log(frutas.indexOf("laranja")); // 2

console.log(frutas.indexOf("pera")); // -1: nao encontrado
// Encontrando o primeiro elemento que atende a uma condicao

var numeros = [4, 9, 12, 17, 20];
var primeiroMaiorQueDez = numeros.find(function (numero) {
  return numero > 10;
});
console.log(primeiroMaiorQueDez); // 12
// Encontrando a posicao do primeiro elemento que atende a uma condicao

var indiceDoPrimeiroPar = numeros.findIndex(function (numero) {
  return numero % 2 === 0;
});
console.log(indiceDoPrimeiroPar); // 0
// Obtendo todos os elementos que atendem a uma condicao

var numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // [4, 12, 20]