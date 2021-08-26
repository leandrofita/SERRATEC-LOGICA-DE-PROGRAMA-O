//Recursividade

function substituirTodos(texto, antigo, novo) {
  var resultado = texto.replace(antigo, novo);
  var posicao = resultado.indexOf(antigo);

  //case base
  if (posicao > -1) { //compara a posição do texto antigo em relação ao texto com as substituições... Usa-se o -1 porque o  o menor índice de uma cadeia de caracteres é 0.

    console.log("Ainda tem ocorrências");
    resultado = substituirTodos(resultado, antigo, novo)
  } else {
    console.log("tudo substituído");
  }
  return resultado;
}

// Forma sem recursividade 

function substituirTudo(texto, antigo, novo) {
    var resultado = texto;
    do 
    {
    resultado = resultado.replace(antigo, novo);
    var posicao = resultado.indexOf(antigo);
    } while (posicao > -1);

    return resultado;

}

var frase = "Eu não vou terminar esse curso.Eu não tenho computador. Hoje não tem sol. ";
var nova = substituirTodos(frase, "não", "sim");
console.log(nova);

nova = substituirTudo(frase, "não", "certeza");
console.log(nova);









