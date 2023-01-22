/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + "está andando"
    }
}

const pessoa = new Person("Jorge")
const pessoa2 = new Person("Pedro")
console.log(pessoa.name, pessoa.walk())
console.log(pessoa2)