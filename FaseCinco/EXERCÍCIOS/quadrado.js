/*8.	O programa “ao quadrado” imprime os quadrados dos números de um a nove, separando cada expressão em uma linha.*/
const prompt = require('prompt-sync')();

for (let i = 0; i < 10; i++) {
    var quadrado = i * i 
    console.log(i + "^" + i + '=' + quadrado);

    
}
