let lista = ["Arroz","Feijão","Biscoito","Refrigerante"];
console.log("A lista ''Natural'' é:",lista);
console.log("Tendo em vista a lista acima usaremos as funções: PUSH, POP, SHIT, UNSHIFT e JOIN.");
console.log("--------------------------------------------------------------------------------------");

// ----- COMANDO PUSH -----//Recebe um ou mais parâmetros, adiciona no final da array e retorna o novo tamanho da array.
console.log("**PUSH**" + "\n" + "A função PUSH adiciona um elemento no final da array, recebe um ou mais parâmetros e retorna o tamanho de elementros da array.")
let nova = lista.push("Patinho");
console.log("O novo tamanho da array após o comando PUSH é:" , nova);
console.log("A nova lista é:", lista);
console.log("--------------------------------------------------------------------------------------");

// ----- COMANDO POP -----//Não recebe parâmetro, elimina o último elemento de uma array e retorna o valor eliminado.
console.log("**POP**" + "\n" + "A função POP remove o último elemeto de uma array, não recebe parâmetro e retorna o elemento que foi removido.");
let x = lista.pop();
console.log("A lista com o elemento removido é:",lista);
console.log("O elemento removido foi:", x);
console.log("--------------------------------------------------------------------------------------");

// ----- COMANDO SHIFT -----//Não recebe parâmetro, elimina o primeiro elemento de uma array e retorna o valor eliminado.
console.log("**SHIFT**" + "\n" + "A função SHIFT remove o primeiro elementro de uma array, não recebe parâmetro e retorna o elemeto que foi removido.");
let y = lista.shift();
console.log("A lista com o elemento removido é:",lista);
console.log("O elemento eliminado da lista foi:" , y);
console.log("--------------------------------------------------------------------------------------");

// ----- UNSHIFT ----- //Recebe um ou mais parâmetros , adiciona no início de uma array e retorna o novo tamanho da array.
console.log("**UNSHIFT**" + "\n" + "A função UNSHIFT recebe um ou mais parâmetros e o adiciona no início de uma Array, retornando a nova quantidade de elementos na array.");
let z = lista.unshift("Coca-Cola");
console.log('A quantidade de elementos nesta array após unshift é:', z);
console.log("Resultado da utilização da função UNSHIFT adicionando o elemento Coca-Cola:", lista);
console.log("--------------------------------------------------------------------------------------");

//console.log("Resultado da utilização da função UNSHIFT adicionando o elemento Coca-Cola:" + "\n" + lista) se eu uso "lista" com concatenar + retorna como UMA STRING. # do uso de (,)
// ----- JOIN ----- //Junta os elementos de uma array usando um separador especificado, caso não especificado fica vírgula como padrão.
                   //Recebe um parâmetro ou não e RETORNA (UMA) STRING com elementos unidos.
let separador = lista.join("-");
console.log("**JOIN**" + "\n" + "Junta os elementos de uma Array utilizando um separador especificado, caso não seja, por padrão usará o separador (,)."+ "\n" + "Recebe parâmetro e retorna UMA STRING contendo todos os elementos de uma Array.");
console.log("Resultado da utilizção da função JOIN:" + "\n" + separador);