/*26.	O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.*/
var prompt = require("prompt-sync")();

var num = 0; 

num = prompt('Digite seus cupons: ');
var cupom = num * 3;

console.log('Seus cupons agora valem ',cupom,'pontos!');