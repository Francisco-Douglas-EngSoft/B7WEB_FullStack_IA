// classList: controlando a aparencia dos elementos com JavaScript
const cartao = document.querySelector("#cartao")
const botao = document.querySelector("#botao")
const mensagem = document.querySelector("#mensagem")

// add adiciona uma classe CSS ao elemento
cartao.classList.add("cartao")

botao.addEventListener("click", () => {
    // toggle alterna a classe: adiciona se nao existir, remove se existir
    const destacado = cartao.classList.toggle("destacado")

    // contains verifica se a classe esta aplicada
    if (cartao.classList.contains("destacado")) {
        mensagem.textContent = "Destaque ativado"
    } else {
        mensagem.textContent = "Destaque desativado"
    }

    console.log("O cartao esta destacado?", destacado)
})

// remove retira uma classe CSS do elemento
const botaoRemover = document.querySelector("#remover")
botaoRemover.addEventListener("click", () => {
    cartao.classList.remove("destacado")
    mensagem.textContent = "A aparencia original foi restaurada"
})