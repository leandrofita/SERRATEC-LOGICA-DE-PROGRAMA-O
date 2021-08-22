const limite = 8;

var qtde = 8;

var liberada = (qtde < limite);
var proximo = (qtde == 7);

//Encadeamento aninhado
if (liberada) 
  if (proximo)
    console.log("Não deixe entar se estiver acompanhada");
  else 
    console.log('Entrada liberada');
 else 
    console.log("Aguarde um pouco");

// Se eu quiser dar mais intruções usar blocso de código.

const limite = 8;

var qtde = 8;

var liberado = (qtde < limite);
var proximo = (qtde == 7);

if (liberado) {
    console.log('Entrada liberada');

    if (proximo)
    console.log('Não deixe entrar se estiver acompanhado. ');

}
else
  console.log('Aguarde mais um pouco');