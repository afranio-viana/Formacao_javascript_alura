import fs from 'fs';
import chalk from "chalk";
import { error } from 'console';


function extrairLinks(texto){
    const regex= /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas=[...texto.matchAll(regex)];
    const resultados=capturas.map(captura=>({[captura[1]]:
        captura[2]}));
    return resultados.length!==0?resultados:"Não há links no arquivo!";
}



function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code,'Não há arquivo no diretório!'));
}

//async e await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding='utf-8';
        const texto=await fs.promises.readFile
        (caminhoDoArquivo,encoding)
       return extrairLinks(texto);
    }catch (erro){
        return trataErro(erro);
    }
}


//promessas com then()

// function pegaArquivo(caminhoDoArquivo){
//     const encoding='utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo,encoding)
//         .then((texto)=>console.log(chalk.bgBlue.yellow.bold(texto)))
//         .catch(trataErro);
// }


export default pegaArquivo;
