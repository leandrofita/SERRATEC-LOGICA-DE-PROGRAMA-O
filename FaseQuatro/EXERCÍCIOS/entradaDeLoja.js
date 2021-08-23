/*12.	O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.*/
var prompt = require('prompt-sync')();

const limiteClientes = 8;

console.log("Tem uma pessoa na porta da loja querendo entrar. ");

var qtde = prompt("Quantas pessoas temos na loja agora? ")

var permitir = (qtde < limiteClientes);
var texto = "A loja está cheia";

if (permitir) 
texto = "Pode permetir a entrda do cliente que está na fila. "; 

console.log(texto); 



// SOLUÇÃO ALTERNATIVA
/*


var prompt = require("prompt-sync")();
const limite = 8
var quant = prompt('Quantos clientes estão na loja agora?');
switch (quant) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
        console.log('Entrada liberada');
        break;
    case "7":
        console.log('Entrada liberada, porém não é permitido entrar acompanhado(a).');
       break
    case "8":
       console.log('Loja lotada, por favor aguarde.');
       break;
    default:
        console.log('Pedir reforços!');
        break;
};
*/