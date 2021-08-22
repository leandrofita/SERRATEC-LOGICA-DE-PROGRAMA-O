/*16.	Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.*/

var prompt = require("prompt-sync")();
var num = 0;
var mensagem = 'Parabéns por comprar X produtos!';

num = prompt('Olá, quantos produtos você deseja comprar?  ');

if (mensagem.includes('X'))
 {
  console.log(mensagem.replace ('X', num));
};
