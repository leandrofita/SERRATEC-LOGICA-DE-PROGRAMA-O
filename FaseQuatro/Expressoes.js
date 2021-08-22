10.	/*Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.*/

var x = 6.0; 
var y = 2;
var z = 4.000; 
var a = 8;
var b = 7.5;
var c = 12;



var expre1 = x - y > a;
var expre2 = x - (y * a) > (c % y);
var expre3 = y != c;
var expre4 = (x * y) != c;
var expre5 = (c % y) <= (y % c);
var expre6 = a < b;
var expre7 = z / a + x * y - 5 <= b;
var expre8 = (c * z + 2) == (a * x + y); 
var expre9 = c == z + b;
var expre10 = (y * 2) != 7 - b;

console.log(expre1);
console.log(expre2);
console.log(expre3);
console.log(expre4);
console.log(expre5);
console.log(expre6);
console.log(expre7);
console.log(expre8);
console.log(expre9);
console.log(expre10);