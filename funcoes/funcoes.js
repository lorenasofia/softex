// função tradicional sem parâmetros
function saudacao() {
    console.log("Olá! Bem-vindo à calculadora.");
}

// função tradicional com parâmetros e retorno de valor
function soma(a, b) {
    return a + b;
}

// arrow function com parâmetros e retorno de valor
const multiplicacao = (a, b) => a * b;

// uso das funções
saudacao();

const resultadoSoma = soma(5, 3);
console.log("Resultado da soma:", resultadoSoma);

const resultadoMultiplicacao = multiplicacao(4, 6);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
