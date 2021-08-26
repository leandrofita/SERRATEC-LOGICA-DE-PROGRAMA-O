var ler = require("prompt-sync")();

var numero = parseInt(ler("Até que número você quer contar? "));
var verImparPar = ler("Quer ver os pares [P] ou ímpares [I]? ").toUpperCase();


if(verImparPar == 'I'){
    do{

        if((numero % 2) == 0){
            numero = numero - 1;
            console.log(numero)
            numero = numero - 2; 
        }else{
            console.log(numero)
            numero = numero - 2;
        }

    }while( numero > 0);

}else{

    do{

        if((numero % 2) == 0){
            console.log(numero)
            numero = numero - 2; 
        }else{
            numero = numero - 1;
            console.log(numero)
            numero = numero - 2;
        }

    }while( numero > 0);

}
