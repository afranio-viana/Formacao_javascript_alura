const nomes=["Afrânio", "Esquerdo", "Viana"];


/*Utilizando arrow function no forEach (mais usual)*/
nomes.forEach((nome)=>{
    console.log(nome);
});

/*Chamando funções para utilizar o forEach */

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);