var ler = require("prompt-sync")();

var qtdDose = 0
var qtdEntrevistas = 0;
var laboratorio = 0;
var doseZero = 0;
var doseUm = 0;
var doseDois = 0;

var entrevistado = ler ("Vamos começar a entrevista?");


while(entrevistado == 'S' || entrevistado == 's'){
    console.log("\nQuantas doses da vacina você já tomou? - Digite 0 (Nenhuma dose) - 1 (uma doses) - 2 (Duas dose)");
    qtdDose= ler();

    if(qtdDose == 0){
        console.log("\nVocê deve tomar a vacina!");
        doseZero++;
    }else{
        console.log("\nQual das vacinas você tomou? - Digite 1 (Coronavac) - 2 (Astrazeneca) - 3 (Pifzer) - 4     (Jhonsons) ");
        laboratorio = ler();

        if(laboratorio == 1){
            var coronavac = 0;
            coronavac++;
        }
        if(laboratorio == 2){
            var astrazeneca = 0;
            astrazeneca++;
        }
        if(laboratorio == 3){
            var pifzer = 0;
            pifzer++;
        }
        if(laboratorio == 4){
            var johnsons = 
            johnsons++;
        }
        if(qtdDose == 1){
            console.log("\nNão esqueça a próxima dose!");
            doseUm++;
        }else{
            console.log("\nParabéns, você está imunizado! Continue se cuidando!");
            doseDois++;
        }
    }

    entrevistado = ler ("\nHá mais alguém para ser entrevistado? (Digite 'S' para sim ou 'N' para não)");
    qtdEntrevistas ++;
}
console.log("\nO número de entrevistado(s) hoje foi de " + qtdEntrevistas + " entrevistados. \n");
console.log(doseZero + " entrevistados ainda não tomaram nenhuma dose");
console.log(doseUm + " entrevistados tomaram a primeira dose e estão aguardando a segunda.");
console.log(doseDois + " entrevistados já tomaram a segunda dose e estão imunizados.");
console.log("\nDos entrevistados, " + coronavac + " entrevistados receberam a dose da coronavac.");
console.log("Dos entrevistados, " + astrazeneca + " entrevistados receberam a dose da Astrazeneca.");
console.log("Dos entrevistados, " + pifzer + " entrevistados receberam a dose da Pifzer.");
console.log("Dos entrevistados, " + johnsons + " entrevistados receberam a dose da Johnsons.\n");

console.log("Fim da entrevista, Obrigado a todos!");