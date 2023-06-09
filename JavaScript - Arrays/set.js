const nomes=['Afrânio', 'Esquerdo', 'Afrânio', 'Viana', 'Viana', 'Esquerdo', 'Afrânio']

/*Set serve para acabar com os valores repedidos de um array */
const meuSet = new Set(nomes);
console.log(nomes);

/*Porém, meuSet não é um array*/
console.log(meuSet);

const nomesAtualizados=[...meuSet];
console .log(nomesAtualizados)