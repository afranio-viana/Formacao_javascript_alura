const clientes=require("./clientes.json");

/*Ordenando a partir da função sort */
function ordenar(lista,propriedade){
    const resultado=lista.sort((a,b)=>{
        if(a[propriedade]<b[propriedade]){
            return -1
        }else if(a[propriedade]>b[propriedade]){
            return 1;
        }else{
            return 0;
        }
    })
    return resultado;
}

const ordenadoNome=ordenar(clientes,"nome");

console.log(ordenadoNome);