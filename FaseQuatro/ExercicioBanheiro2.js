var prompt = require('prompt-sync')();

//Entrada
console.log('           SANITÁRIOS\n-----RESPEITE O MOSTRADOR-----');
var resposta = prompt('O mostrador está verde? Digite S ou N .');

//Processamento

var permitirEntrada = (resposta == 'S') || (resposta == 's');

//Saídas
var mensagem = '';

if(permitirEntrada)
  mensagem = "O banheiro está livre, fique à vontade (mas não muito)!"
else
  mensagem = "O banheiro está ocupado, por favor espere.";
  console.log(mensagem);

