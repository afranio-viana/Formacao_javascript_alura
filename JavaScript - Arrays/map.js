const notas=[10, 9.5, 8, 7, 4];


/*O map serve para percorrer todo um array, mas não substitui
o forEach */
const notasAtualizadas=notas.map((nota)=>{
    return nota+1 >=10 ? 10 : nota+1;
});

console.log(notasAtualizadas);


/*Mesmo código, mas utilizando o forEach, a diferença entre
os dois está no fato de o forEach não obrigatoriamente
gerar um retorno, mas recebe uma função callback que 
será executada para cada item do array */
const notasAtualizadas2=[];
notas.forEach(nota=>{
    notasAtualizadas2.push(nota+1>=10?10:nota+1);
});

console.log(notasAtualizadas2);

console.log(notas);