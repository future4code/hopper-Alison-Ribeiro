// exercicio 3

type postagem = {
    autor: string;
    texto: string;
  };
  
  const posts: postagem[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver",
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!",
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!",
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!",
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!",
    },
  ];
  
  console.table(posts);
  
  function buscarPostsPorAutor(posts: postagem[], autorInformado:string)
   : Array<postagem> {
    return posts.filter((post) => {
      return post.autor === autorInformado;
    });
  }
  console.log(buscarPostsPorAutor(posts, "Dobby"))