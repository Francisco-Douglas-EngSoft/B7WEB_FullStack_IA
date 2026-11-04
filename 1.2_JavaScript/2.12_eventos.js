// Eventos I: addEventListener, click e o objeto event
const botao = document.querySelector("#botao")
const contador = document.querySelector("#contador")
const resultado = document.querySelector("#resultado")

let cliques = 0

// addEventListener registra uma funcao para executar quando o evento ocorrer.
// O objeto event e recebido como argumento pelo callback.
botao.addEventListener("click", (event) => {
    cliques++
    contador.textContent = cliques

    resultado.textContent = `Evento: ${event.type}; elemento clicado: ${event.currentTarget.id}`

    console.log("Alvo original do clique:", event.target)
    console.log("Elemento que recebeu o listener:", event.currentTarget)
})