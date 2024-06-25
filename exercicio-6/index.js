// Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.

let dia = 1;

if (dia === 1 || dia === 7) {
    console.log(`Final de semana`);
}
else {
    console.log(`Dia útil`);
}