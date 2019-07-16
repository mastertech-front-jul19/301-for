/*
Crie um sistema que apresenta uma lista de gostos do usuário. O sistema deve:
- Perguntar se o usuário quer adicionar um novo item na lista;
- Adicionar a entrada do usuário em uma lista de gostos;
Assim que o usuário não quiser mais adicionar um novo item na lista, você deve mostrar cada um dos itens da lista seguindo o esquema:
"Meu gosto nº 1 é ..."
"Meu gosto nº 2 é ..."
"Meu gosto nº 3 é ..."
*/
let deveAdicionar = confirm('Você deseja adicionar um novo gosto à lista?');
let lista = [];


while (deveAdicionar) {
    let gosto = prompt('O que você gosta?');
    lista.push(gosto);

    deveAdicionar = confirm('Você deseja adicionar um novo gosto à lista?');
}

// let i = 0;
// while (i < lista.length) {
//     let item = lista[i];
//     console.log(`Meu gosto nº ${i+1} é ${item}`);
//     i++;
// }

for(let indice in lista) {
    let gosto = lista[indice];
    console.log(`Meu gosto nº ${Number(indice)+1} é ${gosto}`);
}