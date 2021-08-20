'ALGORITMO MONTAR SANDUÍCHE'

INICIO
VARIAVEIS 
   Pao <- (Integral ou Branco)
    
   Pacote de Pao <- (Pao)
 
   Recheio <- (Salgado ou Doce)

   Embalagem <- (Plástico protetor)

   Sanduiche <- ( 2 Pao + Recheio)

   Guardanapo <- (guardanapo de papel)

   Sacola <- (saco plástico reciclável)

ESCREVA "Que tipo de pão você gostaria de usar?"

ESCOLHA

Integral ou Branco

FIMESCOLHA 

 ESCREVA "Que tipo de recheio você gostaria?"
  
    ESCOLHA

       Doce ou Salgado

 FIMESCOLHA 

montarSanduiche()


FUNCAO montarSanduiche()
     
     PEGAR o pacote de pao
     ABRIR o pacote de pao
     LIMPAR as mãos
     PEGAR 2 pao
     PEGAR recheio
     ADICIONAR recheio entre 2 Pao
     FECHAR Pacote de pao
     GUARDAR Pacote de pao

FIMFUNÇÃO

ESCREVA "Gostaria de comer agora ou levar para viagem?"

ESCOLHA 
 CASO comerAgora
    EXECUTE comer()
 CASO viagem
    EXECUTE embalar()

  FUNCAO embalar()
     ENVOLVER sanduiche com Embalagem
     ACRESCENTAR sacola
     ACRESCENTAR guardanapo
  FIMFUNÇÃO

       FUNCAO comer()
          MORDER sanduiche
          MASTIGAR sanduiche
          ENGOLIR sanduiche
       FIMFUNÇÃO

FIMALGORITMO