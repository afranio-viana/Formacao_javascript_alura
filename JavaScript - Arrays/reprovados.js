const alunos= ["Ana", 'Marcos', 'Maria', 'Mauro'];
const medias=[7, 4.5, 8, 7.5];

/*O filter trabalha com true ou false, ele vai incluir
dentro do novo vetor apenas os elementos que satisfaçam
determinada condição */
const reprovados=alunos.filter((aluno,indice)=>{
    return medias[indice]<7;
});

console.log(reprovados);