//Estrutura de repetição
//for

for(let i = 10; i > 0; i++){
    if(i === 5){
        break;
    }

    if(i === 8){
        continue;
    }
    
    console.log(i)
}


//while

let i = 0
while(i < 10){
    console.log(i)
    i++;
}


//for of

let name = 'Helo'
let names = ['Carlos', 'Eduarda', 'Jora']

for(let name of names){
    console.log(name)
}


//for in

let person = {
    name: 'John',
    age: 30,
    weight: 88.7
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}