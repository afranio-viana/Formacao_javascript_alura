const salaJS=[8, 9, 3, 4, 5, 6];
const salaPython=[9, 4, 2, 5, 10];


/*O reduce é utilizado par fazer a somatória dos números
dentro de um array, possui como parâmetro o acumulador e o valor */
function mediaGeral(notas){
    const somatoriaDasNotas= notas.reduce((acumulador,nota)=>{
        /*Sempre deve retornar algo */
        return acumulador=acumulador+nota;
    },0);
    /*O acumulador sempre deve ser inicializado */

    return somatoriaDasNotas/notas.length;
}
const numFixed=2;
console.log(`A média da sala de JavaScript é ${mediaGeral(salaJS).toFixed(numFixed)}`);

console.log(`A média da sala de Python é ${mediaGeral(salaPython).toFixed(numFixed)}`);