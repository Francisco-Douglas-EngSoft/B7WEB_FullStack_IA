// Formularios: capturar, validar e dar feedback com DOM
const formulario = document.querySelector("#formulario")
const campoNome = document.querySelector("#nome")
const campoEmail = document.querySelector("#email")
const feedback = document.querySelector("#feedback")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = campoNome.value.trim()
    const email = campoEmail.value.trim()

    if (nome === "") {
        feedback.textContent = "Informe seu nome."
        campoNome.focus()
        return
    }

    if (!campoEmail.validity.valid || email === "") {
        feedback.textContent = "Informe um endereco de e-mail valido."
        campoEmail.focus()
        return
    }

    feedback.textContent = `Formulario enviado. Obrigado, ${nome}!`
    formulario.reset()
})