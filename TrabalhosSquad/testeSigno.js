var prompt = require("prompt-sync")();
var mes = 0;
var signo = '';

console.log('A Culpa é das Estrelas','\nSolução em Mapas Astrais!');

var mes = prompt('Qual é o mês do seu aniversário?\nPor favor, Digite o número do seu mês sem o zero:\n ->');

switch (mes) 
{
    case (mes <=  1):
    case (mes >=  3):
      signo = 'Mar';
      break;/*
    case (mes >= 4):
    case (mes <=6):
     signo = ('Terra');
     break;
    case (mes >= 6):
    case (mes <=9):
        signo = ('Sol');
        break;
    case (mes >= 9):
    case (mes <=12):
        signo = ('Lua');
        break;
    default:
        console.log('Por favor, insira um número válido de 1 a 12')

        break;*/
}
console.log('Seu sígno é de: ' + signo +'!');