import fs from 'fs';
import chalk from "chalk";
import { error } from 'console';


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
        console.log(chalk.bgBlue.yellow.bold(texto));
    }catch (erro){
        trataErro(erro);
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


pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');