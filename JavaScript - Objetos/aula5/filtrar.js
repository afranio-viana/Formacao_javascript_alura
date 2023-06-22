const clientes=require("./clientes.json");

/*Filtramos clientes a partir de se ele possui apartamento
e foi utilizado um método para verificar se ele possui
a propriedade apartamento */
function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente)=>{
        return(
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados=filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);