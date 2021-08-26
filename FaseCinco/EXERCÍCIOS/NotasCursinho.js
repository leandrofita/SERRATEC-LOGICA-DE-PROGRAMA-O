/* 5.	Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10
*/
const prompt = require ('prompt-sync')();
var nota1 =  parseInt(prompt('Insira a nota da P1: '));
var nota2 =  parseInt(prompt('Insira a nota da P2: '));
var total = nota1 + nota2

if (total > 0 && total <= 4) {
    console.log('Reprovado');
    
}
if (total >= 4 && total <= 6) {
    console.log('Recuperação');

} if (total >= 6 && total <= 8) {
    console.log('Aprovado');
    
}
if (total >= 8 && total <= 10) {
    console.log('Destaque');
    
}