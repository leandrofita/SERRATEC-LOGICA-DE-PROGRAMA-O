/*O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Cada ouvinte tem duas chances! Mas não vale dizer alô, diga “90FM é show”!*/


//////////////////////////

var prompt = require("prompt-sync")();



for(i = 0; i < 3; i++){//
    var chance = 0
    var acerto;


 do {
    var resposta = prompt("Alô ouvinte "+(i+1)+" Qual a sua resposta? -> ");
     acerto = resposta == "42"
     chance++
 } while (chance < 2 && !acerto); // O while está delimitando o laço for nessa linha, limitando o looping aqui.

 if (acerto) {
     console.log('Parabéns!')
     i = 4;
 } else {
     console.log('Errou!')
  }
}
 console.log('Acabou a promoção, pessoal!')