/*14.	É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
Sexo: Feminino
Ano de nascimento: 1999
Cidadão emancipado? True */
var prompt = require("prompt-sync")();
var idade = 0
idade = prompt('Qual o seu ano de nascimento? -> ');
var sexo = prompt('Qual o seu sexo biológico? Digite "M" ou "F" -> ');

var idadeAtual = 2021 - idade;
var emancipadoHom = (idadeAtual >= 18) && ((sexo == 'M') || (sexo == 'm'));
var emancipadoMul = idadeAtual >=21 && ((sexo == 'F') || (sexo == 'f'));

if(emancipadoHom){
    console.log('Idade: ',idade,'//  Sexo: ', sexo);
    console.log('Cidadão emancipado?', emancipadoHom);
    fim();
}
else
if (emancipadoMul){
    console.log('Idade: ',idade,'Sexo: ', sexo);
    console.log('Cidadão emancipado?', emancipadoMul);
    fim();
}
else 
{
    console.log('Idade: ',idade,'Sexo: ', sexo);
    console.log('Cidadão não emancipado');
fim();
};
function fim() {
    console.log('Fim');
}