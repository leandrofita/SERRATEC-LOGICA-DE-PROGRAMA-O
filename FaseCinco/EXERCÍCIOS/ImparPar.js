/*11.	Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).*/

const prompt = require("prompt-sync")();

console.log("Até que número você deseja contar?");
var numero = parseInt(prompt());
var verParidade = prompt("Quer ver os pares P ou ímpares I? ").toUpperCase();
console.log(verParidade);

if (verParidade == "I") {
  do {
    if (numero % 2 != 0){
      numero = numero - 2;
      console.log(numero);
    } else {
      numero = numero - 1;
      console.log(numero);
      numero = numero - 2;
      console.log(numero);
    }
  } while (numero > 0);


} else {
  do {
    if (numero % 2 == 0) {
      numero = numero - 2;
      console.log(numero);
    } else {
      numero = numero - 1;
      console.log(numero);
      numero = numero - 2;
      console.log(numero);
    }
  } while (numero > 0);
}
