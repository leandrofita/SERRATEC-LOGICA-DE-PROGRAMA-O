/*um posto de combustível quer saber qual de seus combustíveis tem a preferência de seus clientes. Primeiramente, o cliente deve informar o tipo de combustível através dos seguintes códigos: 1.Gasolina, 2. alcool, 3.GNV e 4. diesel 5.fim. Se o cliente informar um código inválido, devemos pedir um novo código até que o mesmo seja válido. O programa encerrará caso ele informe o código 5. Após o encerramento, deve aparecer a mensagem "Obrigado" e também a quantidade de cada combustivel.*/

var prompt = require('prompt-sync')();
var resposta = 0

    
do {
        
    
console.log('Olá, caro(a) cliente, gostariamos de saber qual dos nossos combustíveis é o seu preferido!');
resposta = prompt('Por favor, responda com o número correspondente: \n 1- Gasolina\n 2- Álcool \n 3- GNV \n 4- Diesel \n 5- Sair\n ->');
    
var invalido = (resposta >= 1) && (resposta <=5);

if (invalido)
  atribuicao();
else 
console.log('Resposta inválida')
} 

while (invalido == false);
var combustivel = '';

function atribuicao() 

{
 

switch (resposta) {
    case 1:
        combustivel = "Gasolina"; 
        break;
        case 2:
            combustivel = "Álcool"; 
            break;
            case 3:
            combustivel = "GNV"; 
            break;
            case 4:
            combustivel = "Diesel"; 
            break;
            case 5:
                sair();
                break;
    default:
        //pesquisa();
        break;
  }
}
atribuicao()
console.log('Você selecionou o combustível: '+ combustivel);
 sair();

function sair() {
    console.log('Obrigado pela preferência!');
}

