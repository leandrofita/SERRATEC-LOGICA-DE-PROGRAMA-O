/*13.	Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência.*/
var prompt = require("prompt-sync")();

var numero = parseInt(prompt('Insira um número: -> '))
var soma = 0;
for (numero; numero >= 1; numero--) {
    var contagem = numero;
    console.log(contagem);
    soma = numero + numero
    
}
console.log(soma);