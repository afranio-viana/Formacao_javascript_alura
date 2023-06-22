/*Podemos utilizar um array dentro de um objeto */
const pessoa={
    nome:   'Afrânio Viana',
    idade: '23',
    curso: 'Sistemas de Informação',
    telefone: ['9870987097', '98709870987']
};

/*Aninhando uma lista de objetos dentro de outro objeto */
pessoa.enderecos=[{
    rua: "R. Voluntário d Pátria",
    numero: "3412",
    bairro: "Aquele lá",
    apartamento: false
}];


/*Utilizado para obter todas as chaves do objeto pessoa */
const chaves= Object.keys(pessoa);

console.log(chaves);

/*Os includes são utilizados para identificar se um 
determinado campo existe em um objeto, ele sempre retorna um boleano */
if(!chaves.includes("animal")){
    console.log("O capo animal não foi encontrado!");
}