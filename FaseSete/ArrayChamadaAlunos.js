/*Com base nos vetores de alunos e presença, Exibir:

1. A quantidade de alunos
2. Qual o número do aluno “Maria”
3. O total de presentes
4. O nome dos ausentes*/


var prompt = require("prompt-sync")();

var alunos = [];
var presenca = [];

alunos[0] = "Adrian";
presenca [0] = false;
alunos[1] = "Andre Luiz";
presenca[1] = true;
alunos[0] = "Eduardo";
presenca [0] = true;
alunos[2] = "Gustavo";
presenca[2] = true;
alunos[3] = "Antonio";
presenca [3] = true;
alunos[4] = "Felipe";
presenca[4] = false;
alunos[5] = "Gulherme";
presenca [5] = true;
alunos[6] = "Roberto";
presenca[6] = false;
alunos[7] = "Leandro";
presenca [7] = true;
alunos[9] = "Beatriz";
presenca[9] = true;
alunos[10] = "Carol";
presenca [10] = true;

var qutde = alunos.length;
var posicaoNome = -1; 
var nome = "Leandro";
console.log("A quantidade de alunos é: " +qutde);

for (var i = 0; i < qutde; i++) {
   // Critério de busca
    if (alunos[i] == nome){
        posicaoNome = i; // Vair armazenar na variável posicaoNome o posição do aluno no moneto em que o laço passar por ele.
        break; 
    }
} 

if (posicaoNome == -1){
    console.log('Não encontreio o aluno ' + nome + ' na listagem.');
    }
    else{
        console.log('O aluno ' + nome + ' está na cadeira ' + posicaoNome + ' na listagem.' );
    }

    // O total de presentes
    var total = 0;
    

    for(var i =0; i < presenca.length; i++) {

        //var presente = (presenca[i] == true); //pleonasmo, já que o If só é ativado se o valor for true.
        
        if(presenca[i]){
            total++
        }
    }  

    console.log('O total de presentes é: ' + total);