
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


/*Adicionando um objeto no final da lista */
pessoa.enderecos.push({
    rua: "R. algo",
    numero: "431234123",
    bairro: "O mesmo",
    apartamento: true
});


/*Filtrando uma lista de objetos */
const listaApartamentos=pessoa.enderecos.filter(
    (enderecos)=>enderecos.apartamento===true
);


/*Exibindo a lista já filtrada */
console.log(listaApartamentos);