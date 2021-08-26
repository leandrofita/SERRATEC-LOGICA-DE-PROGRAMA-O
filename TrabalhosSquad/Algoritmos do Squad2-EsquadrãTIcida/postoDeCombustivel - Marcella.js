/*um posto de combustível quer saber qual de seus combustíveis tem a preferência de seus clientes. Primeiramente, o cliente deve informar o tipo de combustível através dos seguintes códigos: 1.Gasolina, 2. alcool, 3.GNV e 4. diesel 5.fim. Se o cliente informar um código inválido, devemos pedir um novo código até que o mesmo seja válido. O programa encerrará caso ele informe o código 5. Após o encerramento, deve aparecer a mensagem "Obrigado" e também a quantidade de cada combustivel.*/

const prompt = require("prompt-sync")();
var resposta = 0;
var combustivel = "";
var count = 0;
var gasolina = 0;
var alcool = 0;
var gnv = 0;
var diesel = 0;
var naoResp = 0;
var participantes = 10;
do {
  console.log(
    "\nOlá, caro(a) cliente, estamos realizando uma pesquisa de satisfação!"
  );
  console.log(
    "\nGostariamos de saber qual dos nossos combustíveis é o seu preferido!"
  );
  console.log(
    "\nPor favor, responda com o número correspondente: \n 1- Gasolina\n 2- Álcool \n 3- GNV \n 4- Diesel \n 5- Sair"
  );
  resposta = prompt("-> ");

  do {
    var respostaValida = resposta >= 1 && resposta <= 5;
  } while (!respostaValida);

  switch (resposta) {
    case "1":
      combustivel = "Gasolina";
      gasolina++;
      break;
    case "2":
      combustivel = "Álcool";
      alcool++;
      break;
    case "3":
      combustivel = "GNV";
      gnv++;
      break;
    case "4":
      combustivel = "Diesel";
      diesel++;
      break;
    case "5":
      console.log("Optou por não responder.");
      naoResp++;
      break;
    default:
      break;
  }

  if (resposta != 5) {
    console.log("\nVocê selecionou o combustível: " + combustivel);
    sair();
  }

  function sair() {
    console.log("\nObrigado pela preferência!");
  }
  participantes--;
} while (participantes > 0);

var MaisVotado = Math.max(gasolina, alcool, gnv, diesel);
var nomeMaisVotado = MaisVotado;

var campeao = "";

if (nomeMaisVotado == gasolina) {
  campeao = "Gasolina";
}
if (nomeMaisVotado == alcool) {
  campeao = "Álcool";
}
if (nomeMaisVotado == gnv) {
  campeao = "GNV";
}
if (nomeMaisVotado == diesel) {
  campeao = "Diesel";
}

console.log(
  "N############ RESULTADO DA PESQUISA DE SATISFAÇÃO ##############\n"
);
console.log("O combustível gasolina recebeu " + gasolina + " votos.");
console.log("O combustível álcool recebeu " + alcool + " votos.");
console.log("O combustível GNV recebeu " + gnv + " votos.");
console.log("O combustível Diesel recebeu " + diesel + " votos.");
console.log("O combustível mais votado foi " + campeao + ".");
console.log(naoResp + " pessoas optaram por não respondeer");
