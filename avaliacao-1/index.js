const EXAMPLE_ARRAY = [2, 5, 'teste', 6, 9, 12, 15, 3, 4, 2]
const EXAMPLE_SCORE = [7.0, 8.5, 10, 5]
const EXAMPLE_STRING =  'Valor'
const EXAMPLE_EMAIL = 'moises@gmail.com'

// Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
function getEvenNumbers(elements) {
  let evenNumbers = [];                                   // crio um array vazio que vai armazenar os numeros pares

  for(let element of elements) {                           // percorro o array
    element%2 === 0 ? evenNumbers.push(element) : null;   // uso o operador ternario para criar a condicao
  }

  return evenNumbers;                                     // retorno o array
}


console.log(`Array apenas com numeros pares: ${getEvenNumbers(EXAMPLE_ARRAY)}`)

// Escreva uma função que receba um array de números e retorne a soma de todos os números.
function sumNumbers(elements) {
  // crio a variavel que vai armazenar a soma
  let sum = 0   ;                            

  // percorro o array
  for(let element of elements){
    // verifico se o elemento é um numero        
    if (typeof element === 'number') {
      // faço a soma   
      sum += element;           
    }
  }

  // retorno a soma
  return sum;
}

console.log(`Soma do array: ${sumNumbers(EXAMPLE_ARRAY)}`)

// Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.

function isPalindrome(word) {
  // crio uma variavel vazia que vai armazenar a palavra invertida
  let invertedWord = ''                               

  // percorro a palavra de tras para frente
  for(let i = word.length - 1; i >= 0; --i ) {    
    // crio a palavra invertida
    invertedWord += word[i]                           
  }

  // retorno true se a palavra é um palindromo, false caso contrario
  return word === invertedWord;                       
}

console.log(`É um palíndromo? ${isPalindrome(EXAMPLE_STRING)}`);

// Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.

function vowelsCounter(word) {
  // crio um array com as vogais
  const vowels = ['a', 'e', 'i', 'o', 'u'];      
  // crio um contador que vai armazenar a quantidade de vogais 
  let counter = 0;                                                  

  // percorro o array de vogais
  for(let vowel of vowels) {
    // verifico se a palavra contem a vogal e incremento o contador            
    word.includes(vowel) ? counter += 1 : null;   
  }

  // retorno o contador
  return counter;                                 
}

console.log(`Quantas vogais existe: ${vowelsCounter(EXAMPLE_STRING)}`)

// Escreva uma função que receba um array de números e retorne o menor número do array.

function getSmallerNumber(elements) {
  // crio uma variavel que vai armazenar o menor numero
  let smallestNumber = elements[0];                                 

  // percorro o array de elementos
  for(let element of elements) {         
    // verifico se o elemento é menor que o menor numero                                         
    element < smallestNumber ? smallestNumber = element : null;     
  }

  // retorno o menor numero
  return smallestNumber;                                             
}

console.log(`O menor numero do array: ${getSmallerNumber(EXAMPLE_ARRAY)}`)

// Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3

function getAverage(scores) {
   // crio uma variavel que vai armazenar a soma dos elementos
  let sum = 0;                                 

  // percorro o array de notas
  for(score of scores) {          
    // faço a soma              
    sum += score;                               
  }

  // retorno a media
  return sum/scores.length;                     
}

console.log(`A media das notas foi: ${getAverage(EXAMPLE_SCORE)}`)

// Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.


function characterFrequency(word) {
  // crio um objeto vazio que vai armazenar a frequencia de cada caractere
  let frequency = {};                                                                 

  // percorro a palavra 
  for(let character of word) {         
    // verifico se o caractere ja existe no objeto, se sim incremento, se nao crio a chave e atribuo 1                                                                              
    frequency[character] ? frequency[character] += 1 : frequency[character] = 1;      
  }

  // retorno o objeto
  return frequency;                                                                   
}

console.log(`Frequencia de cada caractere: ${JSON.stringify(characterFrequency(EXAMPLE_STRING))}`)

// Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.

function obscureEmail(email) {
  // separo o email em usuario e dominio
  let [username, domain] = email.split('@');  
  
  // pego a primeira letra do usuario e armazeno
  let obscuredUsername = username[0];         
  
  // percorro o usuario
  for(let i = 1; i < username.length; i++) {  
    // substituo o restante por *
    obscuredUsername += '*';                  
  }

  // retorno o email ofuscado
  return `${obscuredUsername}@${domain}`;     
}

console.log(`Email ofuscado: ${obscureEmail(EXAMPLE_EMAIL)}`)