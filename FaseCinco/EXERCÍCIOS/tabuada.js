/*9.	Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.*/

var prompt = require("prompt-sync")();

console.log('Insira um número: ')
var numero = prompt();

for (var i = 1; i <= 9; i++){
    var mult = i * numero;
    var exibicao = numero + " X " + i + " = " + mult;
    console.log(exibicao); 
}


