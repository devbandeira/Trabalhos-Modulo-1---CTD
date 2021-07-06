let par = [2, 4, 6, 8, 10, 12];
let impar = par.map(function(par){
    return par + 1;
     });
console.log(impar);


// ***************************
let nomes = ["Alex", "João", "Maria", "Allan", "Agatha", "Maria"];
let filtro = nomes.filter(function(nomes){
    //tem que ser identico a escrita? maiúscula e minúscula
    return nomes == "Maria";
});
console.log(filtro);


// ***************************
let numeros = [5,6,9,10,33,50];

let organizado = numeros.reduce(function(acumulador,numeros){
    return acumulador + "-" + numeros ;
});
console.log(organizado);


// ***************************
let animal = ["cobra","cachorro","coruja"]

let msg = animal.forEach(function(animal){
    console.log("O animal é "+ animal);
});
