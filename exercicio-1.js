//  Crie uma variável que armazene uma temperatura em Fahrenheit, 
//  e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8

let fahrenheit = 100;
let celsius = (fahrenheit - 32) / 1.8;

console.log(`A temperatura em Celsius é: ${celsius.toFixed(2)}`);

//  Crie cinco variáveis que representam cinco notas de um estudante. 
//  Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

let nota1 = 10;
let nota2 = 9;
let nota3 = 8;
let nota4 = 7;
let nota5 = 6;

let media = (nota1 * 3 + nota2 * 2 + nota3 * 1 + nota4 * 4 + nota5 * 5) / 15;

console.log(`A média ponderada é: ${media.toFixed(2)}`);