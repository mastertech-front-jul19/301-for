let itens = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
];

console.log(itens);

// let i = 0;
// while(i < itens.length) {
//     let item = itens[i];
    
//     console.log(item);
//     item += ' (Atualizado)';
//     console.log(item);

//     i++;
// }


for(let item of itens) {
    console.log(item);
    item += ' (Atualizado)';
    console.log(item);
}