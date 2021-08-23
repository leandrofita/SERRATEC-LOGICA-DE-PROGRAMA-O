/*16.	O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!  */
//21 de janeiro a 18 de fevereiro

var dia = 0;
var mes = 0;

var prompt = require("prompt-sync")();
mes = prompt('Qual o mês do seu aniversário? -> ');
dia = prompt('Qual o dia do seu aniversário?-> ');


var aquarioJan = (mes == 01) && ((dia >= 21) && (dia <=31));
var aquarioFev = (mes == 02) && ((dia >= 01) && (dia <= 18 ));
var aquario = aquarioJan || aquarioFev;

console.log('Você é inteligente? -> ', aquario);

