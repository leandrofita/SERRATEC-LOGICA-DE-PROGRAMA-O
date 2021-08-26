**Dissertativos Encadeamento**
1.	**O que é um se encadeado?**
R: Uma série de laços ou condicionais aninhados um dentro do outro
2.	**Para um condicional com dois “se”s e um senão, a qual if o else está vinculado (interno ou externo)?**
R: Poderia ser qualquer um dos dois. 
3.	**É possível inverter esse vínculo?**
R: Sim.

##Seletor de escolha (caso)

1.	**Qual a semelhança entre os seletores “se” e “escolha”?**
R: Semelhante ao o if, podemos utilizar blocos para executar várias instruções na mesma alternativa. E possui um ‘caso senão’, quando nenhum seletor atendeu ao valor de entrada. Esse é o valor padrão, ou default.
2.	**Com quais tipos de dados posso utilizar o switch? (JS e demais linguagens)**
R: Somente constantes, ele não aceita variáveis
3.	**É necessário o uso de blocos para conjuntos de instruções?**
R: Sim. Todas as instruções ficam contidas dentro de um caso até o break.
4.	**Porquê as instruções posteriores ao caso atendido também são executadas?**
R: Porque foi esquecido o comando break.
5.	**Qual a função do break?**
R:Interromper os comandos do caso atendido para que o próximo caso não seja executado.
6.	**Como relacionar várias alternativas a um mesmo conjunto de instruções?**
R: Podemos deixar todas as alternativas queremos que sejam executadas juntas dentro da opção default.
7.	**Como criar uma alternativa para “nenhuma das anteriores”?**
R: Podemos usar o default.
8.	**Cite exemplos de quando usar e quando não usar um seletor caso.**
R: Usa-se em: Em listas de seleção / Grupos de constantes / Comparações de igualdade / Quando mais de uma opção ‘mapeia’ para o mesmo valor.
Não usa-se  quando: tenho dois ou menos elementos a testar / Quando o tipo de dados não é ordinal (ex. float) / Quando o operador não é de igualdade / Quando o valor das alternativas não é constante.
