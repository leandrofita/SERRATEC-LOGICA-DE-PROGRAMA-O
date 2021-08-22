/*O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. E o programa irá dizer o nome completo do estado. Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas.*/

const prompt = require("prompt-sync")();

var estado = prompt('Digite a sigla do seu estado: ' );
var nomeEstado = '';
switch (estado) {
    case 'rj':
    case 'RJ':
        nomeEstado =('Rio de Janeiro');
        break;
    case 'sp':
    case 'SP':
        nomeEstado =('São Paulo');
        break;
    case 'AM':
    case 'am':
        nomeEstado =('Amazonas');
        break;
        case 'ap':
    case 'AP':
        nomeEstado =('Amapá');
        break;
    case 'ES':
    case 'es':
        nomeEstado =('Espirito Santo')
        break;
        default:
            nomeEstado =('Estado não cadastrado')
        }

console.log('O nome completo do seu estado é: ' + nomeEstado);