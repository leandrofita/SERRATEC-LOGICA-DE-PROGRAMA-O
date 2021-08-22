var prompt = require('prompt-sync')();

const limiteClientes = 8;

console.log("Tem uma pessoa na porta da loja querendo entrar. ");

var qtde = prompt("Quantas pessoas temos na loja agora? ")

var bloquear = (qtde >= limiteClientes);

console.log("Impedir a entrada?" , bloquear);

