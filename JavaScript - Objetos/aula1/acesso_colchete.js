/*Criando um objeto pessoa */
const pessoa={
    nome:   'Afrânio Viana',
    idade: '23',
    curso: 'Sistemas de Informação'
};

/*Acessando os campos do objeto pessoa através de colchetes*/
console.log(`O aluno ${pessoa['nome']}, possui ${pessoa['idade']} anos e é do curso de ${pessoa['curso']}`);

const chaves = ['nome', 'idade', 'curso'];

/*Iterando em objetos através de forEach */
chaves.forEach((chave)=>{
    console.log(`A chave ${chave} possui valor ${pessoa[chave]}`);
});