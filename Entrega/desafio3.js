//Faça um programa que receba um valor em metros e e chame uma função
// que converta em milímetros.

const read = require('readline-sync')
let metros = parseInt(read.question("Digite o valor em metros: "))

function convertendomedidas (num){
console.log(num * 1000)
}
convertendomedidas(metros)