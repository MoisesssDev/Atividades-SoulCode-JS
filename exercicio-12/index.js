// Escreva um programa que inverte uma string

let string = 'Hello World!';
let stringInvertida = '';

for(let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}

console.log(stringInvertida);

// Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"

let frase = 'Eu gosto de comer maçã';
let palavra = 'comer';
let novaFrase = frase.replace(palavra, '###');

console.log(novaFrase);

// Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com

let email = 'moises@gmail.com';
let dominio = 'soulcode.com';

if(email.includes(dominio)) {
    console.log('Email do domínio soulcode.com');
} else {
    console.log('Email não é do domínio soulcode.com');
}