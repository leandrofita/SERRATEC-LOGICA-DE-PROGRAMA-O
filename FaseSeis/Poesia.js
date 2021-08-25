/*Apresentar uma vez a poesia na tela*/
var prompt = require("prompt-sync")();
const poesia = "Blá blá blá"


console.log('Gostaria de ler uma poesia? S ou N');
var resposta = prompt();

while (resposta == "S") {
console.log('Leia essa poesia: ');
console.log(poesia);
resposta = prompt('Deseja apreciá-la novamente?')
}
console.log('FIm')

//BOTAR DENTRO DO BLOCO DO WHILE {} SOMENTE O QUE EU QUERO QUE SEJA REPETIDO ATÉ QUE DETERMINADA CONDIÇÃO SEJA ATENDIDA

    
