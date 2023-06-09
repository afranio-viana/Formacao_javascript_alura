const notas = [10,10,8,10];
let somaNotas=0;

/*O for of é muito semelhante a forma como se itera sobre arrays
em Python */
for(nota of notas){
    somaNotas+=nota;
}

media=somaNotas/notas.length;
console.log(`A média é: ${media}`);