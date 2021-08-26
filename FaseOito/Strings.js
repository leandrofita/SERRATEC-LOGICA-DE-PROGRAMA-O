// Strings == Cadei de caracteres

var texto = "uma string é um vetor";

var trecho = texto[0];
console.log(trecho);

var tamanho = texto.length;
console.log("tamanho = " + tamanho);

//mão e de quatro a seis; a partir de 4, seis caracteres
trecho = texto.substr(4, 6); // copia a partir do caracter 4 ao 6
console.log(trecho);

var posicao = texto.indexOf(" "); // posição do primeiro "espaço" digitado na string
console.log("A posição do primeiro espaço é " + tamanho);

trecho = texto.toUpperCase();
console.log("tudo em maiusculas: " + trecho);
trecho = texto.toLowerCase();
console.log("tudo em minúsculas: " + trecho);

var aluno = "Maria é muito chata e muito rica";
const antigo = "chata";
const novo = "legal";

var posicao = aluno.indexOf(antigo);
var trecho = aluno.substr(0, posicao);

console.log(trecho);
posicao = antigo.length
trecho = trecho + novo + aluno.substr(posicao, 100);
console.log(trecho)

var aluno = "Maria é muito chata e muito rica";
var trecho = aluno.replace("muito", "pouco");
console.log(trecho);