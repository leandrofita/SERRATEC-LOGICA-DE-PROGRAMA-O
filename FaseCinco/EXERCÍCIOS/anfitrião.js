/*6.	O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.*/

const prompt = require ('prompt-sync')();

var resp = prompt('Digite o número de vezes que você já nos visitou -> ');

if (resp == 1){
    console.log('Essa é a sua primeira visita\n Você já nos visitou uma vez');
}
if (resp == 2){
    console.log('Essa é a sua segunda visita\n Você já nos visitou duas vez');
}
if (resp == 3) {
    console.log('Essa é a sua terceira visita\n Você já nos visitou três vez');
    
}