// exercicio 2
function obterEstatisticas(numeros: Array<number>): object {
  const numerosOrdenados: Array<number> = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: object = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

type amostraDeDados = {
  numeros: number[];

  obterEstatisticas: (numeros: Array<number>) => {};
};
console.log(obterEstatisticas([10, 20, 30]));
