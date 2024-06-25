// Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: 
// Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. 
// Caso seja acima de 5 aumentar em 40% o salário.

let salario = 1000;
let quantidadeDependentes = 6;

if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    salario += salario * 0.3;
}
else if (quantidadeDependentes > 5) {
    salario += salario * 0.4;
}

console.log(`O salário ajustado é: ${salario.toFixed(2)}`);