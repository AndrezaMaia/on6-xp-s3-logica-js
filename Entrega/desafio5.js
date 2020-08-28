 //Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.// 

 const ler = require('readline-sync')
 let numero = parseInt(ler.question("Digite o número: "));

somaProgressiva(numero)

 function somaProgressiva(numero){
    let soma = 0;
    for(let contador = 1; contador <=numero;contador ++){
        soma = soma+contador;
    }
    console.log(soma)
 }
 