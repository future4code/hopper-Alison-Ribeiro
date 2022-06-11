import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    background-image: radial-gradient(circle, MediumPurple, MediumSeaGreen, MediumPurple);
    width: 100vw;
    height: 100vh;
  }
`

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TelaMatch = styled.div`
  border: 1.5px solid black;
  border-radius: .5em;
  width: 350px;
  height: 95vh;
  background-color: #FFF;
  @media screen and (max-width: 450px){
    width: 100vw;
    height:100%;
  }
`

export const Cabecalho = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`

export const Logo = styled.img`
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
`

export const User = styled.img`
    cursor: pointer;
    transition: all 0.2s ease 0s;
    width: 2.25rem;
    height: 2.25rem;
    display: block;
    fill: rgb(117, 49, 146);
`
export const BoxPerfil = styled.div`
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 73vh;
    margin: 3px 0;
    border: 1px solid gray;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    div{
        height: 30%;
        width: 100%;
        position: absolute;
        color: white;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px;
        background-image: linear-gradient(to top, rgba(35, 35, 35, 0.7), transparent);
    }
    img{
        width: 100%;
        display: block;        
    }
`

export const Rodape = styled.div`
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
`

export const BotaoXMatch = styled.button`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid red;
    color: red;
    font-size: 30px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;
`

export const BotaoMatch = styled.button`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid green;
    color: green;
    font-size: 30px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;
`

export const ListaMatch = styled.li`
    display: flex;
    height: 70px;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    align-items: center;
    list-style: none;
    `

export const Foto = styled.div`
    height: 65px;
    width: 65px;
    margin: 0 10px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    img{
      height: 100%;
      width: 65px;
      border-radius: 50px;
    }

`