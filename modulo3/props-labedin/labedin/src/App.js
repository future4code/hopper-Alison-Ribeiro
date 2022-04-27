import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Avatar from './img/alison.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import Email from './img/email.png'
import Local from './img/local.png'
import styled from 'styled-components'

const DivPageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 40vw;
  margin: 10px 0;
  div>h3{
    text-align: center;
  margin-bottom: 20px;
  }
  h2{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`

function App() {
  return (
    <div className="App">
      <DivPageSection>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Avatar} 
          nome="Alison Lucas Ribeiro" 
          descricao="Oi, eu sou o Alison. Sou Programador e Webdesigner. Solução Web para divulgação/venda de produtos e/ou serviços com estratégia de melhor posicionamento em sites de busca."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/625/625942.png" 
          texto="Ver mais"
        />
      </DivPageSection>

      <DivPageSection>
        <CardPequeno
        descri="Email: "
        imagem={Email}
        email="alisonluri@hotmail.com"
        />

        <CardPequeno
        descri="Endereço: "
        imagem={Local}
        email="Valparaíso de Goiás"
        />
      </DivPageSection>


      <DivPageSection>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </DivPageSection>

      <DivPageSection>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </DivPageSection>
    </div>
  );
}

export default App;
