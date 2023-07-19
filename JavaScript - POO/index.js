import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser=new User("Afrânio Esquerdo Viana", 'a@a.com', '2021-01-01');
const novoAdmin=new Admin("Viana", 'v@v.com', '2021-04-01');
// console.log(novoUser.exibirInfos());
// novoUser.modificar('viana');
// console.log(novoUser.exibirInfos());

console.log(novoAdmin.exibirInfos());
novoAdmin.nome=' ';
novoAdmin.email='e@e.com'
console.log(novoAdmin.exibirInfos())