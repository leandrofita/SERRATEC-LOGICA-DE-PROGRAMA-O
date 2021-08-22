console.log('MÁQUINA DE REFRIGERANTES \n Escolha o sabor do seu refrigerante:')
var prompt = require('prompt-sync')();
var coca1 = 5
var fanta2 = 4
var guara3 = 3
var pepsi4 = 2 

var cedula2 = 2
var cedula5 = 5
var cedula10 = 10
var cedula50 = 50

var preço = 0

  var sabor = prompt("Digite o número relativo ao sabor correspondente: \n 1 - Coca \n 2 - Fanta \n 3- Guaraná \n 4- Pepsi \n -> ");

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

console.log('Opções de pagamento: ',);

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

  var troco = (pagamento - preço);

var mensagem = ""

  var negativo = (Math.sign(troco) == -1);

  if (negativo) {
    mensagem = "Valor insuficiente"
    console.log(mensagem)
          }
  else {
  mensagem = "Seu troco é de: " 
  console.log(mensagem, troco);
  };              
 
   
  /*Math.sign(3);     //  1
Math.sign(-3);    // -1
Math.sign('-3');  // -1
Math.sign(0);     //  0
Math.sign(-0);    // -0
Math.sign(NaN);   // NaN
Math.sign('foo'); // NaN
Math.sign();      // NaN 

,cedula2, cedula5, cedula10, cedula50,
*/