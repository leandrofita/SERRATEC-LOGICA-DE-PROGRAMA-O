/*20.	Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado.*/
var prompt = require("prompt-sync")();
var num = 0;
num = prompt('Insira um número -> ');
num2 = num * 2;
console.log('O dobro de '+num+ ' foi '+num2+'.');