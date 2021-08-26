/*7.	No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.*/
var prompt = require("prompt-sync")();
var resposta = "S";


do {
   
    var poema = ('Mamãe querida, meu coração por ti bate tal qual caroço de abacate');
    console.log(poema);
    console.log('Gostaria de apreciar o poema novamente? Responda "S" para sim ou "N" para não');
    resposta = prompt();
    
}while (resposta == "S" || resposta == "s")
console.log('Fim')
