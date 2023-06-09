const alunos= ["Ana", 'Marcos', 'Maria', 'Mauro'];
const medias=[7, 4.5, 8, 7.5];

/*O filter trabalha com true ou false, ele vai incluir
dentro do novo vetor apenas os elementos que satisfaçam
determinada condição */

/*Caso o primeiro parâmetro não esteja sendo utilizado, nomeia-se
ele com um underline */
const reprovados=alunos.filter((_,indice)=>{
    return medias[indice]<7;
});

console.log(reprovados);