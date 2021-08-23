/*13.	Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
Digite a temperatura: 36.9
Usa máscara (S ou N): N
Autorizar a entrada? False*/

var prompt = require("prompt-sync")();

var temper = prompt('Qual a temperatura? -> ');
var protecao = prompt('Está usando máscara? "S" ou "N"-> ');
var requisito1 = true;
var requisito2 = true;
var febre = 37.6;
 


if ((parseFloat(temper) >= febre)){

   requisito1 = false;
}
else{
    requisito1 = true;
}

if ((protecao != 's') && (protecao != 'S')){

requisito2 = false;
}
else{

requisito2 = true;
}
   
   var entradaLiberada = (requisito1 == requisito2) == true;
   
   if (entradaLiberada){
       console.log('Sua temperatura está ok e você está usando máscara!');
       console.log('Entrada liberada');
   }
else
   console.log('Infelizmente você não poderá entrar.');
