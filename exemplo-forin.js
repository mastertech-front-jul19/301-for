let itens = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4'
];

// let i = 0;
// for (let item of itens) {
//     console.log(`${item} está no índice ${i}`);
//     i++;
// }

for (let indice in itens) {
    let valor = itens[indice];
    console.log(indice);
    console.log(valor);
}

let usuario = {
    nome: 'Felipe',
    idade: 24,
    vivo: false
};

for (let chave in usuario) {
    let valor = usuario[chave];
    
    if (chave === 'nome') {
        console.log(`Bem-vindo ${valor}!`);
    }
}

let nomes = ['Felipe', 'Felipe', 'Felipe'];

let iguais = true;

for(let i in nomes) {
    if(nomes[i+1] != undefined && (nomes[i] != nomes[i+1])){
        iguais = false;
    }
}

if(iguais){
    alert("todos os nomes são iguais")
}
else {
    alert("tem gato na tuba")
}