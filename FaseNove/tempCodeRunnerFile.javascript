// Declaração de função
"use strict"


//A declaração de variável "let" só funciona dentro do contexto local dela, ou seja, caso ela tenha sido declarada dentro de função, só poderá ser atribuída dentro dos limites dessa função.

function Sauadacao(params) {
    let ola = "Bom dia";
    console.log(ola);
    
}

ola = "Tudo bem?"
console.log(ola);