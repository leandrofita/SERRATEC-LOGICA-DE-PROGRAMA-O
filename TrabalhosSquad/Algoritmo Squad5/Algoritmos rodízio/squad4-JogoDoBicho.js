/*## Descrição:
Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar.
Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais
e diversas vezes. Será que o Animal que você sonhou é o mesmo da nossa IA?
## Dicas:
Crie uma função para gerar os números aleatórios.
Diga sempre qual é o animal sorteado
Diga se ele acertou ou não
Dê uma nova chance até ele acertar. */



const prompt = require('prompt-sync')();
do{
console.log ("Vamos jogar na loteria informal mais famosa do Brasil?");
console.log ("\n 1 - macaco, \n 2 - foca, \n 3 - urso, \n 4 - camelo, \n 5 - boi \n")
codBicho = prompt ("Digite o código do animal em que quer apostar: ");

var animal = Math.floor(Math.random() * 5) + 1;

var macaco = "1 Macaco"
var foca = "2 Foca"
var urso = "3 Urso"
var camelo = "4 Camelo"
var boi = "5 Boi"

 switch(animal){
  case 1: animalNome = macaco;
  break;
  case 2: animalNome = foca; 
  break;
  case 3: animalNome = urso; 
  break;
  case 4: animalNome = camelo; 
  break;
  case 5: animalNome = boi;  
  break;
  }
 console.log ("o animal sorteado foi: " + animalNome)

if (codBicho == animal){
    console.log ("Você ganhou!");     
}else{
    console.log("Tente novamente")
}

   
}while (codBicho != animal)