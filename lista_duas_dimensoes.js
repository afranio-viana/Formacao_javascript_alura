const alunos=['Afrânio', 'Esquerdo', 'Viana'];
const medias=[10,8,9];


/*Um array de duas dimensões pode possuir mais de um array
dentro de si */
const listaDeAlunosEMedias=[alunos,medias];

console.log(`O aluno na posição 1 é ${listaDeAlunosEMedias[0][1]}.
Sua nota é ${listaDeAlunosEMedias[1][1]}.`);