//Progradragão
const prompt = require('prompt-sync');
console.log(`
"Bravo Heroi, o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar!"
"─────▄████▀█▄"
"───▄█████████████████▄"
"─▄█████.▼.▼.▼.▼.▼.▼▼▼▼"
"▄███████▄.▲.▲▲▲▲▲▲▲▲"
"████████████████████▀▀"

"Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪"
Digite "S", "E" ou "F"`);
var armasUsuario = prompt();
var usuario = "";
switch (armasUsuario) {
    case "S":
    usuario = "Sapato";
    break;
    case "E":
    usuario = "Espada";
    break;
    case "f":
    usuario = "Faca";
    break;

    default:
        console.log('Resposta inválida, escolha novamente.');
        break;
}