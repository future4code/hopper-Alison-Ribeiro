// Exercício 2
type Produto = {
  id: number;
  nome: string;
  preco: number;
}

export const Produtos: Produto[] = [
  { id: Math.random(), nome: "PC Gammer", preco: 4300 },
  { id: Math.random(), nome: "PC Home", preco: 2500 },
  { id: Math.random(), nome: "PC", preco: 3060 },
]