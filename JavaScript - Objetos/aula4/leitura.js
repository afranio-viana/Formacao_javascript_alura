/*Usando o require para requere um objeto de dentro de um json  */
const dados= require("./cliente.json");

/*Printando o objeto */
console.log(dados);

/*Exibindo o objeto para provar que é de fato um objeto */
console.log(typeof(dados));

/*Passando um json para string */
const clienteEmString=JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof(clienteEmString));
console.log(clienteEmString.nome)


/* Passando uma string para um objeto*/
const objetoCliente=JSON.parse(clienteEmString);
console.log(objetoCliente);
console.log(typeof(objetoCliente));