// Arrays: iteracao e busca
const frutas = ["maca", "banana", "laranja", "uva"]

// Acessando um elemento pelo indice (o primeiro indice e 0)
console.log(frutas[0]) // maca

// Percorrendo o array com for
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i}: ${frutas[i]}`)
}

// Percorrendo o array com forEach
frutas.forEach((fruta, indice) => {
    console.log(`Fruta ${indice + 1}: ${fruta}`)
})

// Verificando se um valor existe
console.log(frutas.includes("banana")) // true
console.log(frutas.includes("pera")) // false

// Encontrando a posicao de um valor
console.log(frutas.indexOf("laranja")) // 2
console.log(frutas.indexOf("pera")) // -1: nao encontrado

// Encontrando o primeiro elemento que atende a uma condicao
const numeros = [4, 9, 12, 17, 20]
const primeiroMaiorQueDez = numeros.find((numero) => numero > 10)
console.log(primeiroMaiorQueDez) // 12

// Encontrando a posicao do primeiro elemento que atende a uma condicao
const indiceDoPrimeiroPar = numeros.findIndex((numero) => numero % 2 === 0)
console.log(indiceDoPrimeiroPar) // 0

// Obtendo todos os elementos que atendem a uma condicao
const numerosPares = numeros.filter((numero) => numero % 2 === 0)
console.log(numerosPares) // [4, 12, 20]