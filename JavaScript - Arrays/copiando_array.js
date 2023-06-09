const notas= [9, 3, 5, 6];


/*O spread operator permite compiar um array
sem necessariamente apontar para o mesmo enderço de memória */
const novasNotas= [...notas];

novasNotas.push(9);

console.log(`Os elementos do array notas sã0: ${notas}`);

console.log(`Os elementos do array novasNotas são: ${novasNotas}`);