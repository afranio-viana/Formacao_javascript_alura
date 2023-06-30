const listaLivros=require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado){
    //console.log('de, ate',de, ate);
    const meio=Math.floor((de+ate)/2);
    const atual=array[meio];

    if(de>=ate){
        return "Valor não encontrado";
    }else{
        if(valorBuscado===atual.preco){
            return meio;
        }else if(valorBuscado<atual.preco){

            return busca(array,de,meio-1,valorBuscado);
        
        }else{
            return busca(array,meio+1,ate,valorBuscado);

        }
    }
}


console.log(busca(listaLivros,0,listaLivros.length,50))