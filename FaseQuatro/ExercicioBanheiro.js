var prompt = require('prompt-sync')();

//Entrada
console.log('           SANITÁRIOS\n-----RESPEITE O MOSTRADOR-----');
var resposta = prompt('O mostrador está verde? Digite S ou N .');

//Processamento

var permitirEntrada = (resposta == 'S') || (resposta == 's');

//Saídas
var mensagem = "O banheiro está ocupado, por favor espere.";

if(permitirEntrada)
   mensagem = "O banheiro está livre, fique à vontade (mas não muito)!"

  console.log(mensagem);

s