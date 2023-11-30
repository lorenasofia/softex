const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Insira o primeiro valor:"));
let valor2 = Number(prompt("Insira o segundo valor:"));

let operador = prompt("Escolha o operador (+, -, *, /):");

// inicializa a variável para armazenar o resultado
let resultado;

// realiza a operação com base no operador escolhido
switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    break;
  case "-":
    resultado = valor1 - valor2;
    break;
  case "*":
    resultado = valor1 * valor2;
    break;
  case "/":

    // verifica se o divisor (valor2) é diferente de zero
    if (valor2 !== 0) {
      resultado = Math.floor(valor1 / valor2); // resultado da divisão
      let resto = valor1 % valor2; // resto da divisão
      console.log(`Resultado: ${resultado}, Resto: ${resto}`);
    } else {
      console.log("Não é possível dividir por zero.");
    }
    break;
  default:
    console.log("Operador inválido.");
}

// se a operação não for divisão, exibe apenas o resultado
if (operador !== "/") {
  console.log(`Resultado: ${resultado}`);
}
