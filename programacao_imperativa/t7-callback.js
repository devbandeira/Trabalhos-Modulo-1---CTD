function acaoCarro(acaoCarro)
{
acaoCarro();
}
let andar = function(){ console.log("O carro está andando.")}

let parar = function(){console.log("O carro parou")}

acaoCarro(andar);
acaoCarro(parar);