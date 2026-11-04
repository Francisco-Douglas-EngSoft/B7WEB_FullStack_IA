// DOM (Document Object Model): acessando e alterando elementos da pagina
const titulo = document.querySelector("#titulo")
const botao = document.querySelector("#botao")
const lista = document.querySelector("#lista")
const campoTexto = document.querySelector("#novaTarefa")

// Alterando texto e estilo de um elemento
titulo.textContent = "Minhas tarefas"
titulo.classList.add("destaque")

// Respondendo a um evento de clique
botao.addEventListener("click", () => {
    const texto = campoTexto.value.trim()

    if (texto === "") {
        campoTexto.focus()
        return
    }

    const item = document.createElement("li")
    item.textContent = texto
    lista.append(item)

    campoTexto.value = ""
    campoTexto.focus()
})