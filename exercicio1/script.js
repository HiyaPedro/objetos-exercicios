/*# Exercício 1

Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

nome: string;
preco: number;
disponibilidade: boolean;

b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
*/
const sacolao = [ ]

const frutasDoSacalao = {
nome: "abacaxi",
preco: 5,
disponibilidade: true
}

sacolao.push(frutasDoSacalao)
console.log(sacolao)