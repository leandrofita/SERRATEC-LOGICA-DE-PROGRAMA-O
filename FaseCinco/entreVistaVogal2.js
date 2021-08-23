
var prompt = require("prompt-sync")();
nome = prompt('Qual a primeira letra do seu nome? ');

nome = nome.toUpperCase();
var pri = nome.substr(0, 1);

vogal = (pri == "A") || (pri == "E") || (pri == "I") || (pri == "O") || (pri == "U"); 

console.log(pri);
// Saída
if (vogal){
console.log('Sua entrevista será na segunda');
}
else{
    console.log('Sua entrevista será na na terça-feira');
}
console.log('O RH te deseja um ótimo dia!');