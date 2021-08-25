/* As linhas de ônibus da capital são definidas por números. A empresa "Pão de Açúcar" opera 8 linhas, o passageiro irá digitar o número do ônibus que está vindo, e o programa mostra o nome da linha/trajeto. */

var linhas = ['Granja Guarani x Váreza','Barra x Alto', 'Rosário x Posse', 'Alto x Tijuca', 'Comary x Vale Paraíso', 'G. Florestal x Alto', 'Meudon x Barra', 'Pimentel x Fonte Santa' ];

const prompt = require('prompt-sync')();

var numero = prompt('Digite o número do ônibus correspondente à linha que deseja consultar: ');

var onibus = parseInt(numero) -1; // usa-se o -1 para que a array "inicie" em 1, ou seja, o espaço 0 passa a corresponder ao espçao 1, 2 ao 3 e assim por diante até o 9.

var linha = linhas[onibus];

console.log('Esse ônibus transita pela linha: '+linha);