let filmes = ["Star Wars", "Clube da Luta", "O pederoso chefão", "Top gun", "Interestelar"];
console.log(filmes[1]);

let cartoons = ["toy story", "Procurando nemo", "kung-fu panda", "wally", "fortnine"];
cartoons.pop();

function adicionar(i){
    filmes.push(cartoons[i])
    if (i >= 4){
        console.log("Insira um valor menor que 4")
    }
    return filmes;
}
console.log(adicionar(0));
