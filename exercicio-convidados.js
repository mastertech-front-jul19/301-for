/*
Crie um sistema onde o usuário escreve o nome da pessoa e verifica se ela está na lista de convidados. O sistema deve informar se a pessoa em questão está na lista ou não.
*/

let convidados = [
    'João das Neves',
    'Maria Zinha',
    'Bob Esponja',
    'Arnold Schwarzenegger',
    'Silvester Está Alone',
    'Gui T. Hubens',
    'Carlos'
];

let nomeDigitado = prompt('Qual o nome do convidado?');
let estaNaLista = false;

for (let convidado of convidados){
    if (nomeDigitado === convidado) {
        estaNaLista = true;
    }
}

if (estaNaLista) {
    alert('O convidado está na lista!');
}
else {
    alert('O convidado não está na lista :(');
}


// if(convidados.includes(nomeDigitado)) {
//     alert('O convidado está na lista');
// }
// else {
//     alert('Parece que o convidado não pode entrar, que pena :(');
// }