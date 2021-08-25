var sapato = [];
sapato[0] = "Sandalia";
sapato[1] = "Mocacim";
sapato[2] = "Bota";
sapato[3] = "Chuteira";
sapato[4] = "Rasteirinha";
sapato[5] = "Sapatilha";
sapato[6] = "Tamanco";
sapato[7] = "Kichute";
sapato[8] = "Tenis";
sapato[9] = "Havaianas";
sapato[10] = "Sapatilha";

var pesquisa = "Sandalia";
var encontrados = [];
var nome = "";
var posicao = undefined;

for (var i = 0; i < sapato.length; i++) {
  if (sapato[i] == pesquisa) {
    encontrados[encontrados.length] = i;
    posicao = i;
    nome = sapato[i];
    break;
    //break; //Foi adicionada pois só havia um desse tipo na array
  }
}
console.log("Encontrei nos espaços " + posicao); //Marca os espaços nos arrays onde algo foi encontrado
if (posicao > -1) {
  console.log("Seu sapato " + nome + " está na gaveta " + posicao);
} else {
  console.log("Não encontrado");
}
