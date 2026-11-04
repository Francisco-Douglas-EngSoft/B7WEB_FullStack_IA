//Formas de Manipula Strings no JavaScript

let palavra = "Desenvolvedor JavaScript"

console.log(palavra.length) //Retorna o tamanho da string
console.log(palavra.toUpperCase()) //Retorna a string em maiúsculo
console.log(palavra.toLowerCase()) //Retorna a string em minúsculo


let email = "francisco.douglas@example.com"
console.log(email.indexOf("@")) //Retorna a posição do caractere "@"
console.log(email.slice(0, email.indexOf("@"))) //Retorna o nome do usuário
console.log(email.slice(email.indexOf("@") + 1)) //Retorna o domínio

let textoLongo = "  wqedqhdq   qhwqwjhj  "
console.log(textoLongo.trim()) //Remove os espaços em branco do início e do fim da string
console.log(textoLongo.trim().toLowerCase()) //Remove os espaços em branco do início e do fim da string e retorna a string em minúsculo