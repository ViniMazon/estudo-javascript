// function expression or anonymous

// parâmetros / parameters
const sum = function(number1, number2){

    console.log(number1 + number2)

}

sum(2, 3) // argumentos / arguments

const sum1 = function(number1, number2){
    
    let total = number1 + number2
    return total

}

let number1 = 34
let number2 = 25
console.log('O número 1 é ' + number1)
console.log('O número 2 é ' + number2)
console.log('A soma é ' + sum1(number1,number2))