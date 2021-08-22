//Requisito: Criar um programa para saber se o carro está ligado ou delisgado.

//Declaração do prompt
var prompt = require("prompt-sync")();

//Entrada
console.log('Resposta algumas perguntas com "sim" ou "não": ');
var movimento = prompt("O veículo está em movimento? ");
var barulho = prompt("Está ouvindo o barulho do motor? ");
var luzes = prompt("As luzes do painel, ou farol, estão acessas? ");

//Processamento
var ligado = (movimento == "sim") || (barulho == "sim") && (luzes == "sim");

//Saída
console.log("Concluímos que: seu carro está ligado? ", ligado);
