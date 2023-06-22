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

function ligarParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

/*O spread operator serve para copiar as propriedades de objetos 
para outros */

/*As "..." foram utilizadas para espalhar um array */
ligarParaCliente(...pessoa.telefone);


/*AS "..." foram utilizadas para espalhar uma lista de objetos */
const encomenda={
    destinatario: pessoa.nome,
    ...pessoa.enderecos[0]
}

console.log(encomenda);
