/*9.	Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.*/

var prompt = require("prompt-sync")();

console.log('Qual o número escolhido?')
resposta = prompt()
for (var numero = 1; numero <= 10; numero++ ) {

var resultado = numero * resposta;

var exibicao = (resposta+ ' x '+numero+ ' = '+resultado); 

console.log(exibicao);
}
