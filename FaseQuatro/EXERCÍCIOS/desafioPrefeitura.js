/*Desafios
1.	A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.
Dia (hoje): 16
CPF (após o hífen): 41
Autorizado a entrar na loja? False  */

var prompt = require("prompt-sync")();
var dia = prompt('Insira o dia -> ');
var cpf = prompt('Insira o último dígito do seu CPF-> ');

var diaPar = (dia % 2 == 0);
var cpfPar = (cpf % 2 == 0);

var comparar = (diaPar == cpfPar);

console.log('Pode entra na loja? ', comparar);


//solução alternativa 
/*
var prompt = require("prompt-sync")();
var dia = prompt('Insira o dia -> ');
var cpf = prompt('Insira o último dígito do seu CPF-> ');

var diaPar = (dia % 2 == 0);
var cpfPar = (cpf % 2 == 0);

var comparar = (diaPar == cpfPar);
if (comparar)
console.log('Seja bem-vindo! Pode entrar na loja! ');
else
console.log('Infelizmente hoje não o seu dia de circulação, entrada não autorizada.'); 

*/