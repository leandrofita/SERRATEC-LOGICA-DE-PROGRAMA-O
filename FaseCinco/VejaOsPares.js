/* 	No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10, separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula. Após escrever a frase, o sistema pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência (entre 12 e 20 etc).

7.	Pimentinha para veja os pares:
a.	Vamos fazer a mesma mensagem usando apenas repetições indefinidas?
b.	E que tal não incluir no código expressões booleanas ou seletores? */

const prompt = require("prompt-sync")();

var numeros = [];

var i = 0;
do {
  do {
      
  
  i++;

    if (i % 2 == 0) {
        numeros[i] = i;
        console.log(numeros[i]);
        if (i >= 10) {
        i = i * 2;
        numeros[i] = i;
        console.log(numeros[i]);
        }
    }
    } while (condition);
    
  var resposta = prompt('Continuar exibindo? Digite "S"');
} while (resposta == "S");
