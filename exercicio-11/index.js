// Faça a tabuada completa utilizando o loop for.

for(let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.

let a = 0;
let b = 1;
let n = 10;

for(let i = 0; i < n; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}

// Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).

for(let i = 10; i >= 1; i--) {
    console.log(i);
}

// Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.

let numero = 5;
let fatorial = 1;

for(let i = numero; i > 0; i--) {
    fatorial *= i;
}

console.log(fatorial);

// Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.

for(let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// Mostre a soma do 50 até o número 100 usando loop for.

let soma = 0;

for(let i = 50; i <= 100; i++) {
    soma += i;
}

console.log(soma);

// Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****

let figura = '';

for(let i = 1; i <= 5; i++) {
    figura += '*';
    console.log(figura);
}
