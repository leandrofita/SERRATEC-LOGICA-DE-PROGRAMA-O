//Introdução a objetos;

var alunos = "Maria";
var presente = false;
var nota = 8.0;
// objetos agrupam todas as variais em um único objeto

var aluno = {
    nome: "Maria",
    presente: true,
    nota: 8.0,
};

var aluno2 = {
    nome: "Mario",
    presente: false,
    nota: 3.5,
};

aluno2.nome = "Mario Rapaso";

var aluno3 = {
    nome: ["João", "Augusto", "Silva"]
}
console.log(aluno.nome);
console.log(aluno.presente);
console.log(aluno.nota);

//variaveis internas do objeto
console.log(aluno.nome[2]);
