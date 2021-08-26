/*/* 10.	O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console.*/

var prompt = require("prompt-sync")();

console.log('Quer cara ou coroa?')
var resposta = prompt();
var moeda = ["cara", "coroa"]
var sair = false;
do {
    var palpite = resposta   
    var jogada = Math.floor(Math.random() * 2)
    var resultado = moeda[jogada];
    console.log(resultado);

    sair = palpite == resultado;
} while (!sair);

console.log('O último resultado foi: '+ resultado)
console.log('Fim')