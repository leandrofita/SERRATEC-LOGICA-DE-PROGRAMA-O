// Declaração de decisão 
//Seletores
var prompt = require("prompt-sync")();
var estaVacinado = true;
var resposta = prompt("Você está vaciando? Responda SIM ou NÃO");
estaVacinado = resposta === 'SIM';
var texto = 'Que pena, mas já já é a sua vez.';
if (estaVacinado)
texto = 'Parabéns, não deixe de tomar a senguda dose!';
  console.log(texto);