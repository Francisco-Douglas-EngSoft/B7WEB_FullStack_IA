// Callback e uma funcao passada como argumento para outra funcao
function processarNome(nome, callback) {
    const nomeFormatado = nome.trim().toUpperCase()
    callback(nomeFormatado)
}

function mostrarSaudacao(nome) {
    console.log(`Ola, ${nome}!`)
}

// Passando mostrarSaudacao como callback
processarNome("  Ana  ", mostrarSaudacao)

// Uma funcao anonima tambem pode ser usada como callback
processarNome("bruno", (nome) => {
    console.log(`Bem-vindo(a), ${nome}!`)
})

// Metodos de array tambem recebem callbacks
const numeros = [1, 2, 3]

numeros.forEach((numero) => {
    console.log(`Numero: ${numero}`)
})