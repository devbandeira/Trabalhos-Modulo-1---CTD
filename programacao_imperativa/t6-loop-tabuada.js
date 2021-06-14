//dica seria para usar 2 for, mas não pensei ainda em como fazer com 2 for
// function tabuada(t){
// for (let i = 1; i <= 10; i++){
//     let valor = t * i;
//     console.log(t + " x " +  i + " = " + valor )
// }
// }
// tabuada(7)


//************ código pedido do exercício com dois for***********/
for(let i = 2; i <= 10; i++){
    for (let ind = 1; ind <= 10; ind++){
        console.log(i + " x " + ind + " = " + (i*ind));
    }
    console.log("**************")
}