/*nome iniciado em vogal na segundo e nome inciciado em consoante na terça*/
var prompt = require("prompt-sync")();

var nome = "a";

do {
    nome = prompt('Qual a primeira letra do seu nome? ');

    switch (nome) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            vogal = true;
            break;
    
        default:
            vogal = false;
            break;
    }
  
   if (nome == vogal)
    console.log('Sua entrevista será na segunda');
    else{
        console.log('Sua entrevista será na na terça-feira');
    }


} while (nome != "");

console.log('O RH te deseja um ótimo dia!');