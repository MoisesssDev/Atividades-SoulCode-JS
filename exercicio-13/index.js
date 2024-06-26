//  Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

let peso = 70;
let altura = 1.70;

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function statusIMC(imc) {
    if(imc < 18.5) {
        return 'Abaixo do peso';
    } else if(imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if(imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if(imc >= 30 && imc < 34.9) {
        return 'Obesidade grau 1';
    } else if(imc >= 35 && imc < 39.9) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}

let imc = calcularIMC(peso, altura);
console.log(statusIMC(imc));

// Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function percentual(numero) {
    return `${numero * 100}%`;
}

console.log(percentual(0.456));

// Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

function ehNegativo(numero) {
    return numero < 0;
}

console.log(ehNegativo(-2));

// Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contar(numero) {
    for(let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

// Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Moisés', 'Lima'));

// Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

function calcularAreaCirculo(raio) {
    return 3.14 * raio * raio;
}

console.log(calcularAreaCirculo(5));

// Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function nivelAreaCirculo(area) {
    if(area >= 1 && area <= 20) {
        return 'Nível I';
    } else if(area >= 21 && area <= 40) {
        return 'Nível II';
    } else {
        return 'Nível inválido';
    }
}

console.log(nivelAreaCirculo(15));

// Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function minusculas(string) {
    return string.toLowerCase();
}

console.log(minusculas('HELLO WORLD'));

// Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function contarCaractere(string, caractere) {
    let contador = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] === caractere) {
            contador++;
        }
    }

    return contador;
}

console.log(contarCaractere('Hello World', 'l'));