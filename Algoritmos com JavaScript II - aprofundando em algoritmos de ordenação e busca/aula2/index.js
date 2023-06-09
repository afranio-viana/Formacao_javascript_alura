const listaLivros=require('./array');

function mergeSort(array, nivelDeAninhamento=0){
    console.log(`Nível de Aninhamento: ${nivelDeAninhamento}`);
    console.log(array);
    if(array.length>1){
        const meio=Math.floor(array.length/2);
        const parte1=mergeSort(array.slice(0,meio),nivelDeAninhamento+1);
        const parte2=mergeSort(array.slice(meio,array.length),nivelDeAninhamento+1);
        array=ordena(parte1,parte2);
    }
    return array;
}

function ordena(parte1,parte2){
    let posicaoAtualParte1=0;
    let posicaoAtualParte2=0;
    const resultado=[];

    while(posicaoAtualParte1<parte1.length && posicaoAtualParte2<parte2.length){
        let produtoAtualparte1=parte1[posicaoAtualParte1];
        let produtoAtualparte2=parte2[posicaoAtualParte2];

        if(produtoAtualparte1.preco<produtoAtualparte2.preco){
            resultado.push(produtoAtualparte1);
            posicaoAtualParte1++;
        }else{
            resultado.push(produtoAtualparte2);
            posicaoAtualParte2++;
        }
    }
    return resultado.concat(posicaoAtualParte1<parte1.length
        ?parte1.slice(posicaoAtualParte1)
        :parte2.slice(posicaoAtualParte2));
}


console.log(mergeSort(listaLivros));