/*23.	É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?*/

var compra = 345 + 1545;
var cupom = compra / 190;
cupom = Math.round(cupom);
console.log('Obriigado por por comprar em nosso shopping, suas compras lhe renderam ',cupom,'cupons!');