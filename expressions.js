/*

new
left-hand-side expression
criar um novo objeto

*/

let name1 = new String('Mari')
name1.surName = "Brito"
let age = new Number(23)
console.log(name1.surName,age)

let date = new Date('2022-12-02')
console.log(date)

/*
Operadores unários
typeof
delete
*/

const person = {
    name:'Derick',
    age:'25'
}
delete person.age
console.log(person)
console.log(typeof 'Vini')


//Operadores aritiméticos

//multiplicação
console.log(3 * 6.1)

//divisão
console.log(12/6)

//soma
console.log(32+12)

//subtração
console.log(21-2)

//resto da divisão
let remainder
remainder = 11 % 9
console.log(remainder)

//incremento
let increment = 0
increment++
console.log(increment)

//decremento
let decrement = 0
console.log(--decrement)

//exponencial
console.log(3 ** 3)


//Grouping Operator
let total = (2 + 3) * 5
console.log(total)


//Operadores de comparação
let one = 1
let two = 2

// == igual a
console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(one != two)

// === estritamente igual a
console.log(one === "1")
console.log(one === 1)

//!== estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)

// > maior que
console.log(one > two)

// >= Maior igual a
console.log(one >= 1)

// < Menor que
console.log(one < 0)

// <= Menor igual a 
console.log(two <= 2)


//Operadores de atribuição (Assignment)

//assignment
x = 1

//addition assignment
x +=2

//subtraction assignment
x -= 1

//multiplication assignment
x *= 2

//division assignment
x /= 1


//Operadores lógicos (logical operators)

let pao = true
let queijo = true

// AND 
console.log(pao && queijo)

// OR
console.log(pao || queijo)

// NOT
console.log(!pao)


//Operador Condicional (Ternário)

let paozin = true
let leite = true
const niceBreakfeast = paozin && leite ? 'Café top' : 'Café ruim'
console.log(niceBreakfeast)

// Maior de 18

let idade = 12
const canDrive = idade >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)


//Operador de String (String operator)

//comparsion
console.log('a' == 'a')

//concatenation
let alpha = 'alpha'
console.log(alpha+'bet')





