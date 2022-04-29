import React from 'react';
import styledComponents from 'styled-components';

import './App.css';

const MainContainer = styledComponents.div`
display: flex;
justify-content: center;
`
const BoxMsg = styledComponents.div`
display: flex;
flex-direction: colunm;
align-items: flex-end;
height: 100vh;
width: 70vw;
border: 1px solid black;
`

const BoxDeEnvio = styledComponents.div`
display: flex;
`
class App extends React.Component {
  state = {
    campoUsuario: "",
    campoMensagem: ""
  }




  render () {

    
    return (
      <MainContainer>
        <BoxMsg>
          <BoxDeEnvio>
            <input></input>
            <input></input>
            <button>Enviar</button>
          </BoxDeEnvio>
        </BoxMsg>        
      </MainContainer>
      
    );

  }

}

export default App;
