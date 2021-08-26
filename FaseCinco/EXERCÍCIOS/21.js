/*9.	No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.*/
const prompt = require('prompt-sync')();

var numero = 0;
console.log("Bem-vindo ao 21");

do {
    console.log("Insira uma carta:");
    var carta = parseInt(prompt(""));
    numero += carta;
    console.log(numero);

} while (numero < 21);

if (numero == 21)
{
    console.log('Você ganhou!');
}
else {
    console.log('Você perdeu!');
}
console.log("Fim");