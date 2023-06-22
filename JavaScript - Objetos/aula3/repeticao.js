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


/*Foi utilizado o let para obter cada chave do objeto */
for (let chave in pessoa){
    let tipo = typeof(pessoa[chave]);
    if (tipo!== "function" && tipo!="object"){
        console.log(`A chave ${chave} tem o valor ${pessoa[chave]}`);
    }
}