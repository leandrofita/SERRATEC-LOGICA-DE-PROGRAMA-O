/*17.	Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.*/
var prompt = require("prompt-sync")();
var num1 = 0
var num2 = 0

num1 = prompt('Bem-vindo(a) à calculadora, insira o primeiro número -> ');
num2 = prompt('Agora insira o segundo número -> ');

var mult = num1 * num2;
var div = num1 / num2;
var som = parseFloat(num1) + parseFloat(num2); // Fui obrigado a usar essa função para transformar o número 1 e 2 em número em variáveltipo número já que o JS estava reconhecendo como texto apenas na adição.
var sub = num1 - num2;

console.log('Estes são os resultados das operações aritiméticas destes números:')
console.log('Multiplicação =',mult,'\n','Divisão =',div,'\n','Adição = ',som,'\n','Subtração =',sub );
