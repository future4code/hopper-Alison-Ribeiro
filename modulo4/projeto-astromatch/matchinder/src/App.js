import React, {useState} from "react";
import api from "./config/configApi";
import {GlobalStyle, Container, TelaMatch} from "./components/Styled"
import Matches from "./pages/Matches";
import PerfisMatchs from "./pages/PerfisMatchs";

function App() {
  const [tela, setTela] = useState('inicial')

  const mudaTela = () => {
    if(tela === 'inicial') {
      setTela('matches')
      console.log('algo aconteceu')
    } else {
      setTela('inicial')
      console.log('outracoisa')
    }
  }

  const limparMatchs = async () => {
    try {
      const response = await api.put("/clear")
    }catch(error) {
      console.log(error.response.data)
    }
  }

  return (
    <Container>
      <GlobalStyle />
      <TelaMatch>
        {/* <Matches />
        <PerfisMatchs /> */}
        {tela === 'inicial' ? (
        <Matches  recomecar={limparMatchs} MeusMatchs={mudaTela} />
        ) : (
        <PerfisMatchs limpar={limparMatchs} Voltar={mudaTela} />
        )}
      </TelaMatch>
    </Container>
  );
}

export default App;