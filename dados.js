// Manipulando Strings e Números

//String em número
let string = "321"
console.log(Number(string))

//Número em String
let number = 123
console.log(String(number))

//Contar quantos caracteres
let word = "Paralelepipedo"
console.log(word.length)
let number1 = 1234
console.log(String(number1).length)

//Transformar um número quebrado com 2 casa decimais e trocar ponto por vírugla
let number2 = 345.33745834
console.log(number.toFixed(2).replace(".",","))

//Transformando letras minúsculas em maiúsculas e vice-versa

let word1 = "Programar é muito bacana!"
console.log(word1.toLocaleLowerCase())
console.log(word1.toUpperCase())

let phrase = "O amor vive em todos"
let myArray = phrase.split(" ") //split transforma em array
let phraseUnderscore = myArray.join("_") // join transforma em string
console.log(phraseUnderscore)

//verificar se o texto tem tal palavra
let frase = "Eu quero viver"
console.log(frase.includes("Viver"))

//Criar array com construtor
let mArray = new Array('a','b','c')
console.log(mArray)

//Contar elementos de um array
console.log(["a",{type:"array"},function(){return "alo"}].length)

//Transformar uma cadeia de caracteres em elementos de um array
let palavra = "manipulação"
console.log(Array.from(palavra))

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")
//adicionar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)


