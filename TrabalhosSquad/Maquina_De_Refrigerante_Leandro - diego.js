/*
 Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida.
Proposto por: Leandro Fita
Autor: Diego Dias Faria da Silveira.
Data: 25/08/2021

Máquina de Refrigerantes.
Uma famosa empresa de refrigerantes precisa de um software para rodar no console das suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior, será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o troco. Porém, caso o valor da cédula escolhida seja inferior ao valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento válida seja escolhida.
Os refrigerantes possuem os seguintes preços:
•    R$ 1,99
•    R$ 3,50
•    R$3,99
•    R$6,00
O cliente deseja opções de pagamentos com as seguintes cédulas:
•    R$ 2,00
•    R$5,00
•    R$10,00
•    R$20,00*/

var ler = require("prompt-sync")();

var bebidas = ["Coca Cola", " Guarana ", "  Fanta  ", "  Água   "];
var valoresBebidas = [ 6.00, 3.99, 3.50, 1.99];
var valorCedulas = [2.00, 5.00, 10.00, 20.00];
var valorASerPago = 0, escolhaPagamento = 0, somaPagamento = 0, troco = 0, somaPagamento = 0;

do{
    console.log(" ___________________________________________________________________________________________");
    console.log("|   ==🥤Seja bem vindo! Selecione o número correspondente a bebida de sua preferência🥤==   |");
    console.log("|    🥃Bebidas🥃                                                          💲Valor (R$)💲    |");
    console.log("| 1 - " + bebidas[0] + " ------------------------------------------------------------- R$ "+ valoresBebidas[0].toFixed(2) + "       |");
    console.log("| 2 - " + bebidas[1] + " ------------------------------------------------------------- R$ "+ valoresBebidas[1].toFixed(2) + "       |");
    console.log("| 3 - " + bebidas[2] + " ------------------------------------------------------------- R$ "+ valoresBebidas[2].toFixed(2) + "       |");
    console.log("| 4 - " + bebidas[3] + " ------------------------------------------------------------- R$ "+ valoresBebidas[3].toFixed(2) + "       |");
    console.log("|___________________________________________________________________________________________|\n");


    var escolhaBebida = ler("Qual a sua escolha? ");
    if((escolhaBebida > 4) || (escolhaBebida <= 0)){
        console.log("\nOpção inválida!\n");
    }else{
        console.log(" ___________________________________________________________________________________________");
        console.log("|    🥃Bebidas🥃                                                    💲== Valor (R$)== 💲    |");
        console.log("| Selecionado " + bebidas[escolhaBebida - 1] + " ------------------------------------------------- R$ "+ valoresBebidas[escolhaBebida - 1].toFixed(2) + "           |");
        console.log("|___________________________________________________________________________________________|\n");

        valorASerPago = parseFloat(valoresBebidas[escolhaBebida - 1].toFixed(2));
    }
}while((escolhaBebida > 4) || (escolhaBebida <= 0));

do{
    console.log(" _________________________________________________________________________________");
    console.log("| Aceitamos as seguintes cédulas:                                                 |");
    console.log("|           💸  Opção 1    ----------------------------------------- R$ "+ valorCedulas[0].toFixed(2) + "      |");
    console.log("|         💸💸  Opção 2   ------------------------------------------ R$ "+ valorCedulas[1].toFixed(2) + "      |");
    console.log("|       💸💸💸  Opção 3   ------------------------------------------ R$ "+ valorCedulas[2].toFixed(2) + "     |");
    console.log("|     💸💸💸💸  Opção 4   ------------------------------------------ R$ "+ valorCedulas[3].toFixed(2) + "     |");
    console.log("|_________________________________________________________________________________|\n");
    
    escolhaPagamento = parseFloat(ler("Qual opção escolhida? "));
    if((escolhaPagamento < 1) || (escolhaPagamento > 4)){
        console.log("\nOpção inválida!\n");
    }else{
        escolhaPagamento = parseFloat(valorCedulas[escolhaPagamento - 1]);
        somaPagamento+=escolhaPagamento;
        troco = Math.abs(parseFloat((somaPagamento - valorASerPago)));
        if(somaPagamento < valorASerPago){
            console.log("\n\nValor insuficiente.");
            console.log("Ainda falta " + troco.toFixed(2));
        }
    }
 }while(somaPagamento < valorASerPago);

    console.log(" _________________________________________");
    console.log("|  💸💲                        💲💸       |");
    console.log("|  Seu troco é de .......... R$ " + troco.toFixed(2) + "      |");
    console.log("|  🥤Muito Obrigado pela sua compra!🥤    |");
    console.log("|_________________________________________|");
    

    


