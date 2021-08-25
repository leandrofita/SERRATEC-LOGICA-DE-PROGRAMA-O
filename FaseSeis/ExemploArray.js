//arrays
var prompt = require("prompt-sync")();

var sapato = ["Sandalia", "Bota", "Rasteirinha", "Tenis Azul", "Pantufa"];
var numero = 3;

console.log('Qual número da gaveta você deseja guardar o calçado?');
numero = prompt();
console.log('Qual calçado você deseja guardar?');
calcado = prompt();

sapato[numero] = calcado

console.log('Qual gaveta você gostaria de verificar?')
numero = prompt();

console.log('Na gaveta ' + numero + ' está guardado o calçado '+ calcado+'.');

// new Array [100]; metedo de criar uma array com suas posições já definidas 

