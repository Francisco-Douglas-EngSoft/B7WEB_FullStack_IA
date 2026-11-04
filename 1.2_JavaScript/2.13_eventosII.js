// Eventos II: input e keydown
const campoTexto = document.querySelector("#campoTexto")
const textoDigitado = document.querySelector("#textoDigitado")
const teclaPressionada = document.querySelector("#teclaPressionada")

// input ocorre sempre que o valor do campo e alterado
campoTexto.addEventListener("input", (event) => {
    textoDigitado.textContent = event.currentTarget.value || "(vazio)"
})

// keydown ocorre quando uma tecla e pressionada
campoTexto.addEventListener("keydown", (event) => {
    teclaPressionada.textContent = `Tecla: ${event.key}`

    if (event.key === "Enter") {
        textoDigitado.textContent = `Voce confirmou: ${event.currentTarget.value}`
    }
})