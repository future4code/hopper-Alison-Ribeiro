// Exercício 3
const tarefa = process.argv[2]
const tarefas = ["Lavar a Louça"]
tarefas.push(tarefa)
console.log("\033[31m" + "Tarefas: " + "\033[34m" + tarefas)