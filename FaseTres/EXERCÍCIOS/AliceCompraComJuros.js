/*22.	Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.*/
var compra = 345 + 1545;
var trex = compra / 3;
var cincox = compra / 5;
var dezx = ((compra + compra * 0.015) / 10);
dezx = Math.round(dezx* 100) / 100; //usei a função para arredondar o número em até duas casas decimais.
console.log('Opções de pagamento: ','\n','Preço à vista: ',compra,'\n','Parcelado em 3x de : ',trex,'\n', 'Parcelado em 5x de: ',cincox,'\n', 'Parcelado em 10x de: ',dezx,'- com 1,5% de juros.' );


/* ALTERNATIVA PARA CÁLCULO DE PORCENTAGEM
let preco = 1890,
  porcentagem = 1.5,
  aumento = preco * (1 + porcentagem / 100),
  desconto = preco * (1 - porcentagem / 100)

console.log(aumento)
console.log(desconto)
*/