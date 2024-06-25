//  Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
// Maior ou igual 7 = Aprovado
// Entre 5 e 7 = Reforço
// Menor que 5 = Reprovação

let nota1 = 10;
let nota2 = 9;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`Aprovado`);
}
else if (media >= 5 && media < 7) {
    console.log(`Reforço`);
}
else {
    console.log(`Reprovado`);
}