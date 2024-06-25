// Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.

let idade = 131;

if (idade < 0 || idade > 130) {
    console.log(`Idade inválida`);
}
else {
    console.log(`Idade válida`);
}