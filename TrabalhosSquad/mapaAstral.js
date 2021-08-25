/*Olá, dev. Estou criando um novo mapa astral para minhas previsões astrológicas. 
Para isso, os signos serão remodelados conforme a seguir:
Quem nasceu no 1º trimestre do ano será do signum mar, quem nasceu no 2º trimestre será terra, no 3º trimestre será Sol e por fim, no
4º trimestre, será lua. 
Preciso que colete a data de nascimento mas eu não preciso do ano, somente do dia e o mês. Após o usuário informar sua data o sistema deve dizer qual signum. 
Por fim, faça uma pesquisa de satisfação para saber se ele gostou ou não gostou.*/

var prompt = require("prompt-sync")();
var mes = 0;
var signo = "";
var Pqualidade = "";


function verdade() 
{
    console.log('Qual o ano do seu aniversário?');
    var ano = prompt('->');
    console.log('Seu sígno é de: '+ signo +'!');
    console.log('Você gostou dos nossos serivços? Responda "S" para sim e "N" para não: ')
    Pqualidade = prompt('-> ');
    console.log("Muito obrigado pela sua resposta!\nA Culpa é das Estrelas agradece sua preferência!")
}

console.log('A Culpa é das Estrelas','\nSolução em Mapas Astrais!');
var dia = prompt ('Qual o dia do seu aniversário?');

console.log('Qual é a data do seu aniversário?\nPor favor, digite o número do seu mês sem o zero: ')
var mes = prompt('-> ');



 
//var ano = (ano < 0) && (ano >12);
//while (ano) {
    


if ((mes >= 1) && (mes <= 3))
    {
     signo = ('Mar');
     verdade()
     resposta = true;
    }
else 
if 
    ((mes >= 3) && (mes <= 4))
    {
     signo = ('Terra');
     verdade()
     resposta = true;
    }
if ((mes >= 4) && (mes <= 6))
   {
    signo = ('Sol');
    verdade()
    resposta = true;
   }
else 
if ((mes >= 9) && (mes <= 12))
   {
    signo = ('Lua');
    verdade()
    resposta = true;
   }
 

if ((mes <0) || mes >12) 
 {
console.log('Por favor, insira um número válido de 1 a 12')
resposta = false;
 }
