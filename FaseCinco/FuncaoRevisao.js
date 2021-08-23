var prompt = require("prompt-sync")();

function BurroShrek (palavra, quantidade) {
   var resposta = ""
    
    
    for (let i = 0; i < quantidade; i++) {
        resposta += palavra + "";
    }
    return resposta;
}

var palavra = "Agente já chegou?\n";
var qtd = 10;


var txt = BurroShrek(palavra, qtd);
console.log(txt);
