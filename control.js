//Control flow

//if else
let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
    console.log('Febre Alta')
}else if(mediumTemperature){
    console.log('Febre Moderada')
}else {
    console.log('Saudável')
}

// switch

let expression = 'a'

switch (expression){

    case 'a':
    console.log('a')
        break
    case 'b':
    console.log('b')
        break
    default:
    console.log('default')
        break
}

//throw
//try catch
function sayMyName(name=''){
    if(name === ''){
        throw new Error('Nome é obrigatório')
    }
    console.log('depois do erro')
}
try{
    sayMyName()
}catch(e){
    console.log(e)
}

