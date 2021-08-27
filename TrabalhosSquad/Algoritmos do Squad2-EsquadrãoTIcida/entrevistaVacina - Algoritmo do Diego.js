/*A prefeitura da cidade quer fazer uma pesquisa e saber quantos de seus habitantes já foram vacinados contra o corona vírus. Essa pesquisa irá responder quantas pessoas tomaram a primeira dose, quantas tomaram a segunda dose e quantas não tomaram nenhuma dose ainda, além disso também dirá quantas tomaram a dose de cada laboratório. Ao final o programa deve gerar saídas mostrando a quantidade de pessoas entrevistadas no dia, quantas tomaram uma dose, duas doses ou nenhuma dose e, do total, quantas doses de cada laboratório foram aplicadas. Se a pessoa tomou uma dose o programa deve avisa "Não esqueça a próxima dose", Se tomou as duas "Parabéns, você está imunizado! Continue se cuidando!" e se não tomou nenhuma "Você deve tomar a vacina, proteja você e as pessoas que ama." o programa só deve parar quando não houver mais nenhuma pessoa para ser entrevistada. O número de doses e laboratórios pode variar de acordo com o programador.*/

var prompt = require("prompt-sync")();
var quantDose = 0
var zeroDose = 0;
var doseUm = 0;
var doseUnica =0;
var doseDois = 0;
var quantEntrevistas = 0;
var laboratorio = 0;
var pfizer = 0;
var corona = 0;
var astra = 0;
var jansen = 0;

function imunizado () 
        {
        console.log('\nParabéns, você está imunizado! Continue se cuidando!');
        };

function qutDose() 
        {
            switch (quantDose) {
                case "1":
                    console.log('\nNão se esqueça da segunda dose!');
                    doseUm++;            
                    break;
                case "2":
                    imunizado();
                    doseDois++;
                default:
                    break;
            };
        };

   

var entrevistado = console.log('Tudo pronto para começarmos a entrevista?');
entrevistado = prompt();

while (entrevistado == "S" || entrevistado == "s") {
  
    console.log('\nQuantas doses da vacina contra a COVID-19 você já tomou? Responda responda "0" (nenhuma) "1" (uma) ou "2" duas');
    quantDose = prompt();
     
    if (quantDose == "0") {
       console.log('\nVocê deve tomar a vacina, proteja as pessoas que você ama!');
       zeroDose++;
    }
    
    else {
        console.log('\nQual vacina você tomou? - Responda  "1" (Pfizer) - "2" (Coronavac) - "3" (AstraZeneca) - "4" (Jansen) ');
        laboratorio = prompt();
    }
        if (laboratorio == 1){
            pfizer = 0;
            pfizer++;
            qutDose();
            
        }
        if (laboratorio == 2){
            corona = 0;
            corona++;
            qutDose();
        
        }
        if (laboratorio == 3){
            astra = 0;
            astra++;
            qutDose();
        }   

            if (laboratorio == 4){
            jansen = 0;
            jansen++;
            doseUnica++;
            imunizado();   
        }     
        
          

     
    
    console.log('\nHá mais alguém paser entrevistado? Responda "S" (sim) ou "N" (não): ');
    entrevistado = prompt();
    quantEntrevistas++     
};    

console.log('\n             Muito obrigado pela sua participação!');
console.log('||========================================================================||');
console.log('Hoje foi entrevistado um total de '+quantEntrevistas+' pessoa(s)!');
console.log(doseUm+' pessoa(s) tomou(aram) apenas a primeira dose.');
console.log(doseDois+' pessoa(s) já tomou(aram) a primeira e a segunda dose.');
console.log(doseUnica+' pessoa(s) já está(ão) imunizada(s) com uma vacina de dose única.');
console.log(zeroDose+' ainda não foi(ram) imunizada(s) com nenhuma das duas doses.');
console.log('Um total de '+pfizer+' pessoa(s) foi(ram) imunizados com a Pfizer.');
console.log('Um total de '+corona+' pessoa(s) foi(ram) imunizados com a Coronavac.');
console.log('Um total de '+astra+' pessoa(s) foi(ram) imunizados com a AstraZeneca.');
console.log('Um total de '+jansen+' pessoa(s) foi(ram) imunizados com a Jansen.');
console.log('||========================================================================||');