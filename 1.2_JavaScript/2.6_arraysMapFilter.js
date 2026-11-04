// Arrays II: map e filter
const numeros = [1, 2, 3, 4, 5]

// map cria um novo array transformando cada elemento
const numerosDobro = numeros.map((numero) => numero * 2)
console.log(numerosDobro) // [2, 4, 6, 8, 10]
console.log(numeros) // [1, 2, 3, 4, 5] - o array original nao muda

// Tambem e possivel transformar strings
const nomes = ["ana", "bruno", "carla"]
const nomesEmMaiusculo = nomes.map((nome) => nome.toUpperCase())
console.log(nomesEmMaiusculo) // ["ANA", "BRUNO", "CARLA"]

// filter cria um novo array somente com os elementos aprovados pela condicao
const numerosPares = numeros.filter((numero) => numero % 2 === 0)
console.log(numerosPares) // [2, 4]

const numerosMaioresQueTres = numeros.filter((numero) => numero > 3)
console.log(numerosMaioresQueTres) // [4, 5]

// map e filter podem ser encadeados
const dobroDosPares = numeros
    .filter((numero) => numero % 2 === 0)
    .map((numero) => numero * 2)

console.log(dobroDosPares) // [4, 8]

// Exemplo com objetos: filtrar produtos disponiveis e extrair seus nomes
const produtos = [
    { nome: "Caderno", preco: 15, disponivel: true },
    { nome: "Caneta", preco: 5, disponivel: false },
    { nome: "Mochila", preco: 80, disponivel: true },
]

const nomesDisponiveis = produtos
    .filter((produto) => produto.disponivel)
    .map((produto) => produto.nome)

console.log(nomesDisponiveis) // ["Caderno", "Mochila"]