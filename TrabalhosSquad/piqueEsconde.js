/*Vamos criar um pequeno jogo de esconde esconde. Para dois participantes o participante 1 terá 5 lugares para se esconder: 1 - embaixo da cama; 2 - armário; 3 - porão; 4 - atrás da porta; 5 - banheiro. O participante 1 deverá escolher um dos lugares pra se esconder. Em seguida são apresentadas as opções para o participante 2, ele terá duas chances para encontrar onde o participante 1 se escondeu. Caso ele acerte o participante 1 perde. Caso erre ele perde.*/
/*
let choices = ['a', 'b', 'c']
let tamanho_array = choices.length
let n_aleatorio = Math.floor(Math.random() * tamanho_array);
let retorno_aleatorio = choices[n_aleatorio]
*/

console.log("\n\n\n            ||=================================================||");
console.log("\n            || ######  PIQUE-ESCONDE FRENÉTICO DO CAOS ######  ||" );
console.log("\n            ||=================================================||");  
console.log(
  "\n ----> Dois intrépidos competidores farão 10 rodadas épicas de pique-esconde caótico!"
);
console.log("\n -------> O Player 1 irá usar as artimanhas do Caos para se esconder enquanto que o Player 2 tentará encontrá-lo!");
console.log("\n -------> Mas o Player 2 só terá uma oportunidade por rodada!");
console.log("\n -------> Se o PLayer 1 for descoberto, ponto para Player 2, caso contrário, o Player 1 pontua!");
console.log("\n -------> E aí?! Quem vencerá o desafio?");

var prompt = require("prompt-sync")();
var jogar = ((jogar == "S") || (jogar == "s"));

do {
  var contagemP1 = 0;
  var contagemP2 = 0;

  console.log('\nQuem você acha que ganhará mais vezes? "P1", "P2" ou "EMPATE"?');
  let palpite = prompt();
  var palpiteMai = palpite.toLocaleUpperCase();

  var rodada = 0;
  do {
    let esconderijo = [
      "Embaixo da cama",
      "Armário",
      "Porão",
      "Atrás da porta",
      "Banheiro",
    ];
    let tamanhoEsconderijo = esconderijo.length;
    let player1 = Math.floor(Math.random() * tamanhoEsconderijo); //TROCAR MATH.RANDOM POR 0.9
    player1 = esconderijo[player1];
    console.log("O encondeirijo do Player 1 foi: " + player1);

    let player2 = Math.floor(Math.random() * tamanhoEsconderijo);
    player2 = esconderijo[player2];
    console.log("A tentativa do Player 2 foi:" + player2);

    if (player1 == player2) {
      console.log("O player 2 venceu!");
      contagemP2++;

    } else {
      console.log("O player 1 venceu!");
      contagemP1++;
    }

    rodada++;
    console.log("------------------------- RODADA: ", rodada);
  } while (rodada < 10);

  console.log("O Player 1 venceu ", contagemP1, " vezes!");
  console.log("O Player 2 venceu ", contagemP2, " vezes!");
  let resultado = "";

  if (contagemP1 > contagemP2) {
    console.log("O Player 1 venceu!");
    resultado = "P1";
  } else {
    if (contagemP2 > contagemP1) {
      console.log("O Player 2 venceu!");
      resultado =  "P2";
    } else {
      console.log("Deu empate!");
      resultado =  "EMPATE";
    }
  }
  if (palpiteMai == resultado) {
    console.log("Parabéns! Você é um mestre do caos!");
  } 
  else {
    console.log("Você perdeu! Infelizmente o caos ainda é complexo demais para você!");
  }

  console.log('Gostaria de tentar a sua sorte contra o caos novamente? -> "S" ou "N"');
   
   jogar = prompt() 
   jogar = ((jogar == "s") || (jogar == "S"));
} while (jogar);


console.log('\nAté a próxima... Que o Caos lhe traga boa fortuna!'); 
