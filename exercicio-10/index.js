// Use um laço while para imprimir na tela todos os números pares de 2 a 10.
contador = 10;
i = 2;

while (i <= contador) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70

contador = 10;
i = 1;

while (i <= contador) {
    console.log(`7 x ${i} = ${7 * i}`);
    i++;
}


//  Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

contador = 999;
i = 1;
soma = 0;

while (i <= contador) {
    if (i % 2 !== 0) {
        soma += i;
    }
    i++;
}

console.log(soma);

// Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.

contador = 1000;
i = 1;
total = 0;

while (i <= contador) {
    if (i % 9 === 0) {
        console.log(i);
        total++;
    }
    i++;
}

console.log(`Total de números divisíveis por 9: ${total}`);