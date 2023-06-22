const clientes=require("./clientes.json");

/*Utilizando uma função para encontrar um determinado valor */
function encontrar(lista,chave,valor){
    return lista.find((item)=>item[chave]===valor);
}

const encontrado = encontrar(clientes,"nome","Kirby");

console.log(encontrado);