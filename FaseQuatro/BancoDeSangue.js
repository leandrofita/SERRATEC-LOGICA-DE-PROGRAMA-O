/*17.	Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.
== Banco de Sangue ==
[Digite “Sim” ou “Não” nas restrições a seguir]
Idade abaixo de 16 ou acima de 69 anos: Não
Pesa menos de 50kg: Não
Portador de Hepatite: Não
Já teve Malária: Não
Fez doação recente: Sim

[Resultado da triagem]
Pode doar sangue? False  */

var idade = 0;
var peso = 0;
var hepatite = '';
var malaria = '';
var doacaoRe = '';

var prompt = require("prompt-sync")();
idade = prompt('Qual a sua idade? -> ');
peso = prompt('Pesa menos de 50kg?-> ');
hepatite = prompt('Portador de hepatite?-> ');
malaria = prompt('Ja teve malária?-> ');
doacaoRe = prompt('Fez doação recentemente?-> ');

var podeDoar =  ((idade >= 16) && (idade <= 69)) && ((peso == 'N') || (peso == 'n')) && ((hepatite == 'N') || (hepatite == 'n')) && ((malaria == 'N') || (malaria == 'n')) && ((doacaoRe == 'N') || (doacaoRe == 'n'));

console.log('Pode doar sangue?', podeDoar);
