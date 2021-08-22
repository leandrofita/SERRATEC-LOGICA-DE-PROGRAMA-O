// OPERADORES DE INCREMENTO

var numero = 0;

numero = 0;
console.log(numero);
numero = numero + 1
console.log(numero);
numero = numero + 1
console.log(numero);
numero++;
console.log(numero);

numero = numero + 3;
console.log(numero);

numero--;
console.log(numero);

var resposta = numero++; // o operador de incremento adiciona o incremento DEPOIS que a variável recebe o valor
console.log("ult numero", numero);
console.log("resposta", resposta);

// ++antes == incrementa primeiro, retorna depois;
// depois++ == retorna primeiro e incrementa depois.

// soma abreviação 

var num = 0;

//isso
num = num + 3;
//equivale a isso:
num +=3;

var texto = 'Olá';
texto = 'Zepa'

//operador colado na atribuição
texto = texto + "zepa";

num = num - 5;
num -= 5;
