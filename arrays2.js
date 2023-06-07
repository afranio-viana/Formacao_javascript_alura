alunos=['Afrânio', 'Esquerdo', 'Viana', 'Kronos'];
console.log(alunos);

/*O "slice" serve para fatiar um vetor e não altera ele
diretamente, o último valor do parâmetro não é incluso 
no novo vetor fatiado */
alunos2=alunos.slice(0,alunos.length/2);
console.log(alunos2);

/*Quando passa-se apenas um parâmetro, o JavaScript entende
que trata-se dos números a partir do valor inserido, até
o final do vetor */
alunos3=alunos.slice(alunos.length/2);
console.log(alunos3);