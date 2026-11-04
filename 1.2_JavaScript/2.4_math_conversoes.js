// Números e operações matemáticas
let preco = 19.9
let quantidade = 3

console.log(preco + quantidade) // Soma: 22.9
console.log(preco * quantidade) // Multiplicação: 59.7
console.log(preco / quantidade) // Divisão
console.log(10 % 3) // Resto da divisão: 1

// Métodos do objeto Math
let nota = 7.6

console.log(Math.round(nota)) // Arredonda para o inteiro mais próximo: 8
console.log(Math.floor(nota)) // Arredonda para baixo: 7
console.log(Math.ceil(nota)) // Arredonda para cima: 8
console.log(Math.max(4, 12, 8)) // Maior valor: 12
console.log(Math.min(4, 12, 8)) // Menor valor: 4
console.log(Math.pow(2, 3)) // Potência: 2 elevado a 3
console.log(Math.sqrt(81)) // Raiz quadrada: 9
console.log(Math.random()) // Número aleatório entre 0 (inclusivo) e 1 (exclusivo)

// Conversões de tipo
let numeroTexto = "42.5"
let numero = Number(numeroTexto)
console.log(numero, typeof numero) // 42.5 "number"

let inteiroTexto = "42.5"
console.log(parseInt(inteiroTexto)) // Converte para inteiro: 42
console.log(parseFloat(inteiroTexto)) // Converte para decimal: 42.5

let idade = 25
let idadeTexto = String(idade)
console.log(idadeTexto, typeof idadeTexto) // "25" "string"

let valorInvalido = Number("abc")
console.log(Number.isNaN(valorInvalido)) // true: o texto não pode ser convertido em número