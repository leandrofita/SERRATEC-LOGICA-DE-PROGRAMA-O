// Revisão - Operadores Relacionais (Igual (===) ou diferente (!=))

var prompt = require("prompt-sync")();
var aluno = "Leandro"

var presença = (aluno != " ");

console.log('O aluno está prensete?');
console.log(presença);

//Resultado: true

// Operadores Lógicos

var maria = true ;
var carol = true;

//Quero saber se AMBOS alunos estão presentes (representados por &&) [conjunção]
var estaoPresentes = (maria && carol);
var estaaoPresente = (true && false);

console.log('Estão presente?', estaoPresentes);

//Resultado: false


// Operador OU (representado por ||) [disjunção]
// Quando QUALQUER dos valores é verdade, só será falso se AMBOS forem falsos

var servidorDragao = true;
var servidorGuerrilha = false;

var entrar = servidorDragao || servidorGuerrilha;

console.log("Estou conectado no Discord?", entrar);

//Resultado: true

// OPERADORES UNÁRIOS 

//not (representado por bang ! )

var prof = false;
var serverGalera = ! prof;

console.log("Posso entrar no server da galera?", serverGalera);

// Exemplo de operação binária com três variáveis

//var motoristaProfissional = true && true & true;
//var motoristaProfissional = (habilitação) A e B e C;

var moto = true; 
var carro = true; 
var vuc = true;

var motoristaProfissional = moto && carro && vuc;
console.log('É motorista profissional?', motoristaProfissional);

// Resultado: true

/* Mesmo exemplo com entrada do usuário:
Ele precisa ter as categorias A, B e C.
*/

// Entradas
var prompt = require('prompt-sync')();
var A = prompt('Possui habilitação A? Digite s ou n ');
var B = prompt('Possui habilitação B? Digite s ou n ');
var C = prompt('Possui habilitação C? Digite s ou n ');

//Processamento
//Primeiro particularizar, depois generalizar.
var moto = (A == "s") || (A == "S") || (A == "Sim");
// var motot = (A == "s" || "S"); <- Isso é impossível, pois a leitura do código é feita em pares/binário.
var carro = (B == "s") || (B == "S") || (B == "Sim");
var vuc = (C == "s") || (C == "S") || (B == "Sim");

// && , || - operadores lógicos
var resposta = moto && carro && vuc;
//Saída
console.log('Você é motorista de verdade?', resposta);