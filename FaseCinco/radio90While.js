const prompt = require("prompt-sync")();
//entrada
 
var telefone = prompt("Ligando para você: ");
var naoAcertou = (telefone != '90show');

while (naoAcertou)
 {
  console.log("Que pena...")
  telefone = prompt("Ligando para você: ");
  naoAcertou = (telefone != '90show');
}
 console.log("Você ganhou!");

 
