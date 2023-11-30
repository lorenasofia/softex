const prompt = require('prompt-sync')();

try {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Digite números válidos.");
    }

    let resultado = numero1 / numero2;

    if (!isFinite(resultado)) {
        throw new Error("Resultado é infinito.");
    }

    console.log(`Resultado: ${resultado}`);
} catch (error) {
    console.error(`Erro: ${error.message}`);
} finally {
    console.log("Execução concluída.");
}
