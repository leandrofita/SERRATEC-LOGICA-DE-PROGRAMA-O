console.log("Todas as tabuadas!");

for (var tabuada = 1; tabuada <= 10; tabuada++) {
  console.log('Tabuada de ' + tabuada +' :');
  
    //A cada volta do laço  externo o laço inter é repetido o número de vezes definido por ele.
  for (var i = 1; i <= 9; i++) {
    var resultado = tabuada * i;
    var exibicao = tabuada + " x " + i + " = " + resultado;
    console.log(exibicao);
  }
  console.log('----------------------');
}

