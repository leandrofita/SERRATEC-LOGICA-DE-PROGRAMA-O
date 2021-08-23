/*15.	O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.*/

var angulo1 = 0;
var angulo2 = 0;
var angulo3 = 0;
var triangulo = false;

var prompt = require("prompt-sync")();
angulo1 = prompt('Insira o primeiro ângulo -> ');
angulo2 = prompt('Insira o segundo ângulo-> ');
angulo3 = prompt('Insira o terceiro ângulo-> ');

triangulo = parseFloat(angulo1) + parseFloat(angulo2) + parseFloat(angulo3) == 180;

console.log('É um triangulo válido? ', triangulo);