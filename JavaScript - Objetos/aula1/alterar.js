const pessoa={
    nome:   'Afrânio Viana',
    idade: '23',
    curso: 'Sistemas de Informação'
};

console.log(pessoa);
console.log(`${pessoa.telefone}`);

/*É possível acrescentar novos campos em um objeto já criado */
pessoa.telefone='92994128887';
console.log(`${pessoa.telefone}`);

/*É possível atualizar campos já existentes em um objeto */
pessoa.nome='Afrânio Esquerdo Viana';
console.log(pessoa);

/*Utiliza-se o operador delete para deletar 
um determinado campo de um objeto */
delete pessoa.curso;
console.log(pessoa);