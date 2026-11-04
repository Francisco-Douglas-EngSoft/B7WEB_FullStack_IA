"use strict";

// Arrays II: map e filter
var numeros = [1, 2, 3, 4, 5]; // map cria um novo array transformando cada elemento

var numerosDobro = numeros.map(function (numero) {
  return numero * 2;
});
console.log(numerosDobro); // [2, 4, 6, 8, 10]

console.log(numeros); // [1, 2, 3, 4, 5] - o array original nao muda
// Tambem e possivel transformar strings

var nomes = ["ana", "bruno", "carla"];
var nomesEmMaiusculo = nomes.map(function (nome) {
  return nome.toUpperCase();
});
console.log(nomesEmMaiusculo); // ["ANA", "BRUNO", "CARLA"]
// filter cria um novo array somente com os elementos aprovados pela condicao

var numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // [2, 4]

var numerosMaioresQueTres = numeros.filter(function (numero) {
  return numero > 3;
});
console.log(numerosMaioresQueTres); // [4, 5]
// map e filter podem ser encadeados

var dobroDosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
}).map(function (numero) {
  return numero * 2;
});
console.log(dobroDosPares); // [4, 8]
// Exemplo com objetos: filtrar produtos disponiveis e extrair seus nomes

var produtos = [{
  nome: "Caderno",
  preco: 15,
  disponivel: true
}, {
  nome: "Caneta",
  preco: 5,
  disponivel: false
}, {
  nome: "Mochila",
  preco: 80,
  disponivel: true
}];
var nomesDisponiveis = produtos.filter(function (produto) {
  return produto.disponivel;
}).map(function (produto) {
  return produto.nome;
});
console.log(nomesDisponiveis); // ["Caderno", "Mochila"]