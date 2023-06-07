/*Mesmo sendo uma constante, um array pode ser modificado
a partir de alguns métodos específicos */
const notas=[4,5,10];


/*O "push" serve para inserir um elemento no final do array */
notas.push(10);

/*O "length" recupera a quantidade de valores dentro de 
um array */
let media=(notas[0]+notas[1]+notas[2]+notas[3])/notas.length;

console.log(notas.length);


/*O "pop" retira o último elemento do array */
notas.pop();

console.log(notas.length);

const arrayVazia=[,,];


/*Arrays esparsos comtém espaços vazios */
console.log(arrayVazia);
console.log(arrayVazia.length);

arrayVazia.push(8);
console.log(arrayVazia);
console.log(arrayVazia.length);
