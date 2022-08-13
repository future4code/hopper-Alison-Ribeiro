// Para que o node acesse parâmetros no código é necessário o process.argv[]

// Exercício 1
const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log("\033[31m" + "Olá, " + nome + "! Você tem " + idade + " anos." + "\033[34m" + " Em sete anos você terá " + idade+7 + ".")
