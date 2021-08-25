var prompt = require("prompt-sync")();
console.log('Bem-vindo(a) à tabuda!')
do {
  console.log("Qual operação você deseja realizar?");
  console.log(
    "Responda:\n 1- Adição \n 2- Subtração\n 3- Multiplicação\n 4- Divisão\n 5- Sair"
  );
  var resposta = prompt();
  var sair = "";

  switch (resposta) {
    case "1":
      console.log("Qual numéro você deseja somar?");
      var num = prompt();
      soma(num);
      break;
    case "2":
      console.log("Qual numéro você deseja subtrair?");
      var num = prompt();
      sub(num);
      break;
    case "3":
      console.log("Qual numéro você deseja multiplicar?");
      var num = prompt();
      multi(num);
      break;
    case "4":
      console.log("Qual numéro você deseja dividir?");
      var num = prompt();
      div(num);
      break;
    case "5":
        fim();
        sair = "N";
        break;
        default:
     console.log('Operação inválida.')
      break;
      
  }
  if (resposta != 5)
  console.log("Deseja realizar uma nova operação? REsponda S para sim e N para N");
  sair = prompt();
} while (sair == "S" || sair =='s');

fim();






function multi(resposta) {
  for (numero = 1; numero <= 9; numero++) {
    var multiplicacao = resposta * numero;
    var exibicao = resposta + " x " + numero + " = " + multiplicacao;
    console.log(exibicao);
  }
}

function div(resposta) {
  for (numero = 1; numero <= 9; numero++) {
    var divisao = resposta / numero;
    var exibicao = resposta + " / " + numero + " = " + divisao;
    console.log(exibicao);
  }
}

function soma(resposta) {
  for (numero = 1; numero <= 9; numero++) {
    var soma = parseInt(resposta) + numero;
    var exibicao = parseInt(resposta) + " + " + numero + " = " + soma;
    console.log(exibicao);
  }
}

function sub(resposta) {
  for (numero = 1; numero <= 9; numero++) {
    var subtracao = parseInt(resposta) - numero;
    var exibicao = parseInt(resposta) + " - " + numero + " = " + subtracao;
    console.log(exibicao);
  }
}

function fim() {
  console.log("Fim!");
}
