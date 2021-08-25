var alunos = [];
alunos[0] = "Adrian";
alunos[1] = "André Cintra";
alunos[3] = "Adriano";
alunos[4] = "Maria";
alunos[5] = "Felipe";
alunos[6] = "Roberto";
alunos[7] = "Leandro"; 

var presenca = [];// irá receber a posição dos alunos da array "alunos".
var chamada = "Leandro";
var posicao = undefined;
var nome = '';


for (var i  = 0; i <alunos.length; i++){

    //Eu quero testar se a minha variável de teste (chamada) está contida em alguma posição da array alunos.
    if (alunos[i] == chamada ) { // se o aluno que está na posição i é igual o que está armazenado em chamada.
        presenca[presenca.length] = i; // a array presença recebe a volta do laço em que a a posição do teste(chamada) coinscidiu com a informação armazenada.
        posicao = i; // armazena a posição na array alunos que estava contida a informação no momento em que o laço for passou por ela.
        nome = alunos[i];// armazena o que estava contido na posição em que o faço for passou por ela.
    } 

}

console.log('O aluno ' +nome+ ' está presente?');
if (chama == nome) {
    console.log('O aluno está presente! E ocupa a posição '+(posicao + 1)+ ' na lista.');

}

