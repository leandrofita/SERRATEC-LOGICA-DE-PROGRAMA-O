/*O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente as aparições de caras ou coroas.
Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda.*/


var cara = 0;
var coroa = 0;

for (var i = 1; i <= 1000; i++) {

      var resultado = Math.floor(Math.random() * 2);

    
    if (resultado == 1){
        cara++

    } else {
        coroa++ 
    } 
} 
coroa = coroa * 10;
cara = cara * 10;
console.log('Deu coroa '+coroa / 100+' % das vezes');
console.log('Deu cara '+cara / 100+' % das vezes');

