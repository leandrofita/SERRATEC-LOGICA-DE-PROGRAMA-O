/*O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!*/

const prompt = require("prompt-sync")();
//entrada
do { //  executa o bloco de código pelo menos uma vez antes de reailzar o teste do while.
 var telefone = prompt("Ligando para você: ");

//Processamento
var errado = (telefone != "90show");

//saída 
if (errado)
  console.log("Que pena...")
else 
  console.log("Parabéns, você ganhou!")
}
while (errado);