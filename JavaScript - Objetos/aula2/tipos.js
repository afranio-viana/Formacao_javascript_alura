/*Podemos utilizar um array dentro de um objeto */
const pessoa={
    nome:   'Afrânio Viana',
    idade: '23',
    curso: 'Sistemas de Informação',
    telefone: ['9870987097', '98709870987']
};

console.log(pessoa);

/*Podemos utilizar todas as propriedade de um array em um array
dentro de um objeto */
console.log(`${pessoa.telefone}`);
console.log(`${pessoa.telefone[1]}`);