/*12.	Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
== Maioral ==
  Player 1: 7
  Player 2: 8
: Resultados :
  Player 1 venceu? False
  Player 2 venceu? True
  Houve empate? False
*/
var prompt = require("prompt-sync")();
var num1 = 0
var num2 = 0

num1 = prompt('Vamos jogar! Player 1, insira o primeiro número -> ');
num2 = prompt('Player 2, insira o segundo número -> ');

var teste1 = num1 > num2;
var teste2 = num1 < num2;
var teste3 = num1 == num2;

console.log('Resultados:')
console.log('Play 1 venceu?', teste1);
console.log('Play 2 venceu?', teste2);
console.log('Houve empate?', teste3);