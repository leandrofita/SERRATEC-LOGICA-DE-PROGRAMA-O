/*25.	O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.*/
var prompt = require("prompt-sync")();

var num = 0; 

num = prompt('Digite seus cupons: ');
var cupom = num;

console.log('De acordo com seus cupons, você possui ',cupom,'pontos no programa de fidelidade!');
