//Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit.
// F = 9*C/5 + 32 //

const read = require('readline-sync')
let temperatura = parseInt(read.question("Digite a temperatura: "))

function calcularTemperatura(num){
console.log(num * (9 / 5) + 32)
}

calcularTemperatura(temperatura)


