// Criando, inserindo e removendo elementos com DOM
const formulario = document.querySelector("#formulario")
const campoTarefa = document.querySelector("#tarefa")
const lista = document.querySelector("#lista")
const mensagem = document.querySelector("#mensagem")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const texto = campoTarefa.value.trim()
    if (texto === "") {
        mensagem.textContent = "Digite uma tarefa antes de adicionar."
        campoTarefa.focus()
        return
    }

    // createElement cria um elemento que ainda nao esta na pagina
    const item = document.createElement("li")
    const textoItem = document.createElement("span")
    const botaoRemover = document.createElement("button")

    textoItem.textContent = texto
    botaoRemover.type = "button"
    botaoRemover.textContent = "Remover"
    botaoRemover.addEventListener("click", () => {
        // remove retira o elemento e seus descendentes da pagina
        item.remove()
    })

    item.append(textoItem, " ", botaoRemover)

    // prepend insere o novo item no inicio da lista
    lista.prepend(item)

    campoTarefa.value = ""
    mensagem.textContent = "Tarefa adicionada."
    campoTarefa.focus()
})