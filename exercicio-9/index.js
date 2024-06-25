// Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

let turno = 'M';

if (turno === 'M') {
    console.log(`Bom dia!`);
}
else if (turno === 'V') {
    console.log(`Boa tarde!`);
}
else if (turno === 'N') {
    console.log(`Boa noite!`);
}
else {
    console.log(`Valor inválido!`);
}