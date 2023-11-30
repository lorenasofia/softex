// calculadora de média

const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Insira a primeira nota (entre 0 e 10):"));
let nota2 = Number(prompt("Insira a segunda nota (entre 0 e 10):"));
let nota3 = Number(prompt("Insira a terceira nota (entre 0 e 10):"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("A média das notas é: " + media);
