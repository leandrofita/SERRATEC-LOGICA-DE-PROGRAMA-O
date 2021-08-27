/*PROGRADRAGÃO*/

const prompt = require("prompt-sync")();

do{
    do{

    console.log(`
    "Bravo Heroi, o grande e poderoso dragão 'Progradragão' esta vindo para destruis o mundo, e só você podera nos salvar!"
    "─────▄████▀█▄"
    "───▄█████████████████▄"
    "─▄█████.▼▼▼▼▼▼▼▼▼▼▼▼▼"
    "▄███████▄.▲▲▲▲▲▲▲▲▲"
    "████████████████████▀▀"
    "Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪"`)

    var resposta = prompt("Escolha sua arma: ")
    resposta = resposta.toUpperCase()

    var fraquezaDragrao = parseInt(Math.random() * 3)
    var arma
    var respostaInvalida = 0
    console.log(fraquezaDragrao)
    

        switch(resposta){
            
            case "SAPATO": arma = 0; break; 
            case "ESPADA": arma = 1; break; 
            case "FACA":   arma = 2; break;

            default: {
            console.log("Resposta inválida. Tente novamente")
            respostaInvalida = true
            };

        } 

    } while(respostaInvalida)


    if (fraquezaDragrao == arma)
    console.log("Empate.")
    else
        if (
            (fraquezaDragrao == 0 && arma == 2) ||
            (fraquezaDragrao == 1 && arma == 0) ||
            (fraquezaDragrao == 2 && arma == 1)

        )
        console.log("Você é um verdadeiro herói. Você derretou o Progradragão! Mas fiquei antento pois ele pode voltar.")
        else
        console.log("Você virou churrasquinho! O Progradragão é mais forte do que você pensa!")

var jogarNovamente = prompt("Deseja jogar novamente?")

} while(jogarNovamente == "S" || jogarNovamente == "s" || jogarNovamente == "Sim" || jogarNovamente == "sim")