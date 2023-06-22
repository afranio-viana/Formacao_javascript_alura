/*Podemos utilizar um array dentro de um objeto */
/*Use o "this" para referenciar 
que está utilizando o objeto atual */

/*É possível alterar um valor de um
objeto a partir de uma função */
const pessoa={
    nome:   'Afrânio Viana',
    idade: '23',
    curso: 'Sistemas de Informação',
    telefone: ['9870987097', '98709870987'],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor>this.saldo){
            this.saldo=this.saldo-valor;
            console.log(`Saldo insuficiente: R$ ${this.saldo}`);
        }else{
            this.saldo=this.saldo-valor;
            console.log(`Pagamento realizado: ${this.saldo}`);
        }
    }
};

console.log(pessoa);

pessoa.efetuaPagamento(150)

console.log(pessoa);