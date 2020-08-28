//Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit 
//e chame uma função que converta para Celsius.//

const read = require('readline-sync')
let temperatura = parseInt(read.question("Digite a temperatura: "))

function calcularTemperatura(num){
console.log(((num - 32) * (5/9)).toFixed(2))
}
// (num °F − 32) × 5/9 = resultado °C//
calcularTemperatura(temperatura)

