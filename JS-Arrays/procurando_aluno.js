const alunos=['Afrânio', 'Esquerdo', 'Viana'];
const medias=[10,8,9];
const listaDeAlunosEMedias=[alunos,medias];

function exibeNomeAluno(aluno){
    /*O include serve para verificar se determinado elemento
    se encontra em um array */
    if(listaDeAlunosEMedias[0].includes(aluno)){
        /*A desestruturação de listas facilita a
        utilização das mesmas, no caso, uma constante foi definida
        para cada  uma das linhas do array*/
        const [alunos,medias]=listaDeAlunosEMedias;
        /*O indexOf serve para retornar o índice de determinado
        elemento dentro de um array */
        const indice=alunos.indexOf(aluno);
        const mediaAluno=medias[indice];

        console.log(`O aluno ${aluno} foi encontrado e tem a média ${mediaAluno}`);
    }else{
        console.log(`O aluno ${aluno} não foi encontrado`);
    }
}

exibeNomeAluno("Afrânio");