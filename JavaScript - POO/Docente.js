import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento,role='docente',ativo=true){
        super(nome,email,nascimento,role,ativo)
    }
    aprovaEstudante(nomeDoCurso,nomeDoEstudante){
        return `O aluno "${nomeDoEstudante}" foi aprovado no curso de ${nomeDoCurso}!!!`;
    }
}

const novoDocente=new Docente('Viana', 'v@v.com','2021-02-02');
const novoAluno=new User("Afrânio Esquerdo Viana", 'a@a.com', '2021-01-01');

console.log(novoDocente);
console.log(novoDocente.exibirInfos());

console.log(novoAluno);
console.log(novoAluno.exibirInfos());

console.log(novoDocente.aprovaEstudante('Python',novoAluno.nome));
