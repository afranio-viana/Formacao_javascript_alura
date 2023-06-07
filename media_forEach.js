const notas = [10,10,8,10];
let somaNotas=0;


/*O forEach é utilizado para retornar valor e índice dos valores
de dentro de um array */
notas.forEach(function(nota,indice){
    somaNotas+=nota;
    console.log(indice)
});

media=somaNotas/notas.length;
console.log(`A média é: ${media}`);