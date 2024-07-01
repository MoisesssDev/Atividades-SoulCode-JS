// Crie uma função arrow que recebe dois números e retorna o maior deles.

const maiorNumero = (a, b) => { return a > b ? a : b; }

// Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

const palavras = ['banana', 'maçã', 'uva', 'melancia', 'abacaxi'];

palavras.forEach(palavra => console.log(palavra.charAt(0).toUpperCase() + palavra.slice(1)));

// Use map para transformar um array de números, multiplicando cada número por 5.

const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicados = numeros.map(numero => numero * 5);
console.log(numerosMultiplicados);

// Use filter para retornar um array com os números menores do que 5.

const numerosMenoresQue5 = numeros.filter(numero => numero < 5);
console.log(numerosMenoresQue5);

// Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.

const idades = [10, 15, 18, 20, 25, 30, 35, 40, 45, 50];

const idadesMaioresOuIguaisA18 = idades.filter(idade => idade >= 18);
console.log(idadesMaioresOuIguaisA18);

// Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

const livro = {
  titulo: 'JavaScript para iniciantes',
  autor: 'John Doe',
  publicacao: {
    editora: 'Casa do Código',
    ano: 2020
  }
};

console.log(livro.publicacao.editora);

// Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.

const frutas = ['banana', 'maçã', 'uva', 'melancia', 'abacaxi'];

const [primeiraFruta, segundaFruta] = frutas;
console.log(primeiraFruta, segundaFruta);
