/*9.	O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.*/
var prompt = require("prompt-sync")();

var num1 = 0
var num2 = 0

num1 = prompt('Bem-vindo(a) ao Testador de Relacionais, insira o primeiro número -> ');
num2 = prompt('Agora insira o segundo número -> ');

var igualdade = num1 == num2;
var diferença = num1 != num2;
var maior = num1 > num2;
var maiorIgual = num1 >= num2;
var menor = num1 < num2;
var menorIgual = num1 <= num2;

console.log('O primeiro número é igual ao segundo número? ', igualdade);
console.log('O primeiro número é diferente do segundo número? ', diferença);
console.log('O primeiro número é maior do que o segundo número ? ', maior);
console.log('O primeiro número é maior ou igual ao segundo número? ', maiorIgual);
console.log('O primeiro número é menor do que o segundo número? ', menor);
console.log('O primeiro número é menor ou igual ao segundo número? ', menorIgual);