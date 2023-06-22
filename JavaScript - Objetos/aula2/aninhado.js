/*Podemos utilizar um array dentro de um objeto */
const pessoa={
    nome:   'Afrânio Viana',
    idade: '23',
    curso: 'Sistemas de Informação',
    telefone: ['9870987097', '98709870987']
};

/*Aninhando um objeto dentro de outro objeto */
pessoa.endereco={
    rua: "R. Voluntário d Pátria",
    numero: "3412",
    bairro: "Aquele lá"
};

/*Exibindo objeto */
console.log(pessoa);

/*Exibinbo apenas o objeto aninhado */
console.log(pessoa.endereco);