// Exercício 2
const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operacao) {
    case "add":
        console.log("\033[34m" + "Resposta: " + "\033[31m" + (num1+num2));
        break;
    case "sub":
        console.log(`Resposta: ${num1 - num2}`);
        break;
    case "mult":
        console.log(`Resposta: ${num1 * num2}`);
        break;
    case "div":
        console.log(`Resposta: ${num1 / num2}`);
        break;
    default:
        console.log("Operação inválida. Digite: add para soma, sub para subtração, mult para multiplicação ou div para divisão.")
        break;
}