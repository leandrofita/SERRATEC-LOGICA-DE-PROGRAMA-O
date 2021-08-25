const semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta", "Quinta" ];
semana[5] = "Sexta";
semana[6] = "Sabado";

semana = [];

console.log(semana[4]); //Sempre que eu quiser exibir algum item de uma array e preciso especificar a posição dentro da array com [numero da posição].

//lista
semana.push("Semana acabou");

// É possível atribuir novas coisas a uma constante vetor, desde que eu atribua a nova informação a um espaço definido. Exemplo:
const vetor = [];
vetor[0] = "não é uma atribuição, pois é uma atribuição no vetor e sim nos espaços que ele possuí"


var A = 6
var b = 8

//Permuta (exchange);
var aux = A;
A = B;
B = A;