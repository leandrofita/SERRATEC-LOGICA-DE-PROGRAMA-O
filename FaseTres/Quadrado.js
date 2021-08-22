/*21.	O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.*/
var prompt = require("prompt-sync")();
var num = 0;
num = prompt('Insira um número -> ');
num2 = Math.pow(num, 2);
console.log('O quadrado de '+num+ ' foi '+num2+'.');