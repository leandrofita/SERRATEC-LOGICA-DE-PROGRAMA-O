console.log('MÁQUINA DE REFRIGERANTES \n Por favor, escolha o sabor do seu refrigerante: ')

var prompt = require('prompt-sync')();
var coca1 = 4
var fanta2 = 3
var guara3 = 3.50
var pepsi4 = 3.99

var cedula2 = 2
var cedula5 = 5
var cedula10 = 10
var cedula50 = 50

var preço = 0
var voltar = 'V' || 'v';
var comprou = false;


function comprar()
{
  console.log('Opções de pagamento: ',);     

  var negativo = true // teste que fornece a condição do while

  while (negativo)  // loop enquanto essa condição se manter verdadeira...
  {
    var pagamento =prompt('Pagamento:\n Escolha o valor da cédula:R$ \n- 2 \n- 5 \n- 10 \n- 50\n ->');

          if (pagamento == "2")
            pagamento = cedula2;
          else
          if (pagamento == "5")
            pagamento = cedula5;
          else
          if (pagamento == "10")
              pagamento = cedula10;
          else 
          if (pagamento == "50")
                pagamento = cedula50;;
          if (pagamento == voltar) 
          {
          
            };
    var troco = (pagamento - preço);

  var mensagem = ""

    negativo = (Math.sign(troco) == -1);  // função Match.sign me diz se um número é positivo ou negativo, se for positivo me devolve "1" negativo "-1"

    if (negativo) {
      mensagem = "Valor insuficiente, por favor insira um valor válido."  // O teste do if não funcionou aqui sem um else
      console.log(mensagem)
    
            }
    else {
      mensagem = "Seu troco é de: R$ " // Não consegui exibir a mensagem incluindo a variável troco nessa linha.
      console.log(mensagem, troco);
      console.log('Obrigado pela sua compra!');
      comprou = true; 
    };              
  }

}


for (let cont = 0 ; cont < 4 ; cont++) {
  var sabor = prompt("Digite o número relativo ao sabor correspondente: \n 1 - Coca \n 2 - Fanta \n 3- Guaraná \n 4- Pepsi\n -> ");
  //var sabor = "1";    
  if (sabor == "1") {
        console.log('Excelente escolha! Valor:R$',coca1);
        preço = coca1
      }
      else
        if (sabor == "2") {
         console.log('Excelente escolha! Valor:R$',fanta2);
          preço = fanta2
      }
       else
           if (sabor == "3") {
         console.log('Excelente escolha! Valor:R$',guara3);
         preço = guara3
         } 
          else 
            if (sabor == "4") {
            console.log('Excelente escolha! Valor:R$',pepsi4);
            preço = pepsi4
            } 

  voltar = prompt('Digite "V" caso queira retornar para a seleção ou "C" para confirmar e prosseguir com a compra: \n->');
  if ((voltar == 'C') || (voltar == 'c')) {
    comprar()  
      if (comprou = true){
          cont = 4;
      }   
       
    }  
      if (!comprou){
        console.log('Nenhuma opção válida selecionada - Por favor, reinicie a operação :)');} 
}

  

  /* Match.sign()
  
  Math.sign(3);     //  1
Math.sign(-3);    // -1
Math.sign('-3');  // -1
Math.sign(0);     //  0
Math.sign(-0);    // -0
Math.sign(NaN);   // NaN
Math.sign('foo'); // NaN
Math.sign();      // NaN 
*/