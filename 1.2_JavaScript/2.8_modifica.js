// Lendo e modificando conteudo e atributos com DOM
const titulo = document.querySelector("#titulo")
const descricao = document.querySelector("#descricao")
const link = document.querySelector("#link")
const imagem = document.querySelector("#imagem")

// textContent le ou altera o texto sem interpretar HTML
console.log(titulo.textContent)
titulo.textContent = "Conteudo atualizado com JavaScript"

// innerHTML le ou altera o conteudo HTML interno do elemento
console.log(descricao.innerHTML)
descricao.innerHTML = "Aprendendo <strong>JavaScript</strong> com DOM."

// Atributos podem ser lidos e alterados diretamente
console.log(link.getAttribute("href"))
link.setAttribute("href", "https://developer.mozilla.org/")
link.setAttribute("target", "_blank")
link.setAttribute("rel", "noopener noreferrer")
link.textContent = "Consultar documentacao"

// Propriedades especificas tambem permitem alterar atributos
console.log(imagem.src)
imagem.src = "https://placehold.co/300x160"
imagem.alt = "Imagem de exemplo atualizada"