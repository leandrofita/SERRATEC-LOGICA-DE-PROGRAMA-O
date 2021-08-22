var prompt = require('prompt-sync')();

const limiteClientes = 8;

console.log("Tem uma pessoa na porta da loja querendo entrar. ");

var qtde = prompt("Quantas pessoas temos na loja agora? ")

var permitir = (qtde < limiteClientes);
var texto = "A loja está cheia";

// só executa com o valor true
if (permitir) // SIGNIFICADO: Se o teste da variável permitir for verdadeior, execute a linha debaixo.
texto = "Pode permetir a entrda do cliente que está na fila. "; // O if só controla ESTA LINHA.

console.log(texto); // essa linha sempre será executada, independente do teste do if.