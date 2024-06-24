//  Crie uma variável que armazene uma temperatura em Fahrenheit, 
//  e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8

let fahrenheit = 100;
let celsius = (fahrenheit - 32) / 1.8;

console.log(`A temperatura em Celsius é: ${celsius.toFixed(2)}`);

//  Crie cinco variáveis que representam cinco notas de um estudante. 
//  Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

notas = [10, 9, 8, 7, 6];
pesos = [3, 2, 1, 4, 5];

let media = (notas[0] * pesos[0] + notas[1] * pesos[1] + notas[2] * pesos[2] + notas[3] * pesos[3] + notas[4] * pesos[4]) / (pesos[0] + pesos[1] + pesos[2] + pesos[3] + pesos[4]);
console.log(`A média ponderada é: ${media.toFixed(2)}`);