const livros=require('./listaLivros');

function menorValor(arrProdutos,posicaoIncial){
    let maisBarato=posicaoIncial;
    for(let atual =posicaoIncial; atual<arrProdutos.length;atual++){
        if(arrProdutos[atual].preco<arrProdutos[maisBarato].preco){
            maisBarato=atual;
        }
    }
    return maisBarato;
}

module.exports=menorValor;