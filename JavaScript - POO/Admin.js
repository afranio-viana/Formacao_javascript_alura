import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento,role='admin',ativo=true){
        super(nome, email, nascimento,role,ativo);
    }
    criarCurso(nomeDoCurso,vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`; 
    }
}

// const novoAdimin=new Admin('Afrânio', 'a@a.com','2021-01-02');
// console.log(novoAdimin);
// console.log(novoAdimin.exibirInfos());
// console.log(novoAdimin.criarCurso('Js',20));