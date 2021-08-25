var prompt = require("prompt-sync")();
const resposta = "42";

//Usuários
for (let i = 0; i < 3; i++) {
    var respostaUsuarios = [];
    //chances
    var chances = 0;
    for (let j = 0; j < 2; j++) {
        chances++
        respostaUsuarios[j] = prompt('Olá,' + (i + 1)+ ' ouvinte! Qual a sua resposta? ->  ');
        if (respostaUsuarios[i] == resposta);{
        console.log('Você ganhou!')
        j = 2;}
        if (chances < 2){
            console.log('Vamos tentar de novo!');
        }
        else {
            console.log((i+1)+' ouvinte, não foi dessa vez! Próximo!')
        }
    }
    
}

