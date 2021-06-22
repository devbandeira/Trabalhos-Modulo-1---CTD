let numerosPrimos = [2,3,5,7,11,13,17,19,23,29,31];
let numeros = [80,60,90,...numerosPrimos];
console.log(numeros);


//******encontre o maior e o menor******/

function maiorNumero(...paramns){
    return Math.min(...paramns);//porque só executa se eu passar o ... sem os ... ele não executa, retorna NaN ???? return Math.min(paramns)
}
console.log(maiorNumero( 50, 9, 50, 100, 60, 59));