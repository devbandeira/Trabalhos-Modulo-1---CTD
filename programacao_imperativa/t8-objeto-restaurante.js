function Restaurante(nome, cardapio){
    this.nome = nome;
    this.cardapio = cardapio;//se eu usar [cardapio] imprime [[ duas vezes]]
    let saudacao =  function(){return "Olá, restaurante " + nome + "Este é o cardápio" + cardapio}
    console.log(cardapio.length);
}
let novoRestaurante = new Restaurante("Alexander", ["pipa","pizza","tuti"]);
console.log(novoRestaurante);
