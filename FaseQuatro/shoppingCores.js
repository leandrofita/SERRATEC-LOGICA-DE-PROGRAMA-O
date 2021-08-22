var prompt = require("prompt-sync")();
console.log("           SANITÁRIOS\n-----RESPEITE O MOSTRADOR-----");

// Entradas
var cor = prompt("Qual a cor do mostrador? ");

//Processamento
var texto = "";
if (cor == "vermelho")
{
  texto = "Completamente ocupado "
}
else 
  if (cor == "amarelo"){
    texto = "Atenção a capacidade ";
  }
  else
    if (cor == "laranja"){
      texto = "Feminino ocupado, masculino livre ";
    }
      else 
      texto = "Sanitário liberado";

console.log(texto);