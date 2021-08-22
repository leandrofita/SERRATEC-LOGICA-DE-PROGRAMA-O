/* Mesmo exemplo com entrada do usuário:
Ele precisa ter as categorias A, B e C.
*/

// Entradas
var prompt = require('prompt-sync')();
var A = prompt('Possui habilitação A? Digite s ou n ');
var B = prompt('Possui habilitação B? Digite s ou n ');
var C = prompt('Possui habilitação C? Digite s ou n ');

//Processamento
//Primeiro particularizar, depois generalizar.
var moto = (A == "s") || (A == "S") || (A == "Sim");
// var motot = (A == "s" || "S"); <- Isso é impossível, pois a leitura do código é feita em pares/binário.
var carro = (B == "s") || (B == "S") || (B == "Sim");
var vuc = (C == "s") || (C == "S") || (B == "Sim");

// && , || - operadores lógicos
var resposta = moto && carro && vuc;

//Saída
console.log('Você é motorista de verdade?');
if (resposta === false) 
console.log('Precisa melhorar, você não é um motorista de verdade!');
if (resposta === true)
console.log('Pode apostar, Você tirou muita onda!');  

