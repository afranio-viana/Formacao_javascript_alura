const altura=7;
const comprimento=5;
const forma="triângulo";
let area;

if(forma.toLocaleLowerCase()=== "quadrado"){
    area=altura*comprimento;
}else{
    area=(altura*comprimento)/2;
}

console.log(area)