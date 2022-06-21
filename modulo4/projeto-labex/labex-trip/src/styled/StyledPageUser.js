import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import fundoUser from '../assets/fundohomepage.jpg'
import cabine from '../assets/cabine-turismo-espacial.jpg'
import painel from '../assets/painel.webp'
import fundouser2 from '../assets/astronautaviagem.jpg'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    background-color: black;
    width: 100vw;
    height: 100vh;
  }
`

export const PageUser = styled.div`
    background-image: url(${fundouser2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BoxNavigate = styled.div`
  display: flex;
  margin-left: 20vw;
  margin: 25px 0;
`

export const BoxUser = styled.div`
    border: 1px solid white;
    border-radius: 5px;
    color: aliceblue;
    font-size: 1.5em;
    margin: 3px;
    padding: 2px;
    &:hover {
      color: whitesmoke;
      background-color: black;
    }
`

export const BoxAdmin = styled.div`
    border: 1px solid white;
    border-radius: 5px;
    color: aliceblue;
    font-size: 1.5em;
    margin: 3px;
    padding: 2px;
    &:hover {
      color: whitesmoke;
      background-color: black;      
    }
`

export const ListaTrips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: antiquewhite;
  height: 100px;
`

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(224,255,255,0.3);
  width: 355px;
  img{
    height: 30px;
    margin: 5px;
  }
  input{
    width: 350px;
    margin: 5px;
  }
  select{
    width: 350px;
    margin: 5px;
  }
`