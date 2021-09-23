import styled, { keyframes }  from 'styled-components'


export const BodeGuru = keyframes`
    0% {
        transform: translatey(-30px)
    }
    50%{
        transform: translatey(30px)
    }
    100%{
        transform: translatey(-30px)
    }
    `
export const TelaPaginaInicial = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;
    margin-top: -80px;
    height: 100vh;
    font-family: 'Roboto';

    @media(max-width: 420px){
        flex-direction: column;
        margin-top: 40px;
    }
`

export const Container = styled.div`
    margin-top: 40px;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 80px;
    
    @media(max-width: 420px){
        margin-top:20px;
    }

    @media(min-width: 421px) and (max-width: 620px){
        margin-right: 40px;
    }
`
export const Wise = styled.h2`
    color: #bdb6a4;
    width:20vw;
    font-size: 48px;
    margin-bottom: 0px;

    @media(max-width: 420px){
        font-size: 30px;
    }

    @media(min-width: 421px) and (max-width: 620px){
        font-size:40px;
    }

    @media(min-width: 621px) and (max-width: 720px){
        font-size:50px;
    }
`
export const Goat = styled.h1`
    width:20vw;
    color: #720057;
    font-size: 120px;
    margin-bottom: 10px;
    margin-top: 0px;

    @media(max-width: 420px){
        font-size:40px;
    }
    @media(min-width: 421px) and (max-width: 620px){
        font-size:60px;
    }
    @media(min-width: 621px) and (max-width: 720px){
        font-size:80px;
    }

`

export const Button = styled.button`
    width: 60%;
    color: white;
    border: none;
    border-radius: 10px;
    font-size:26px;
    padding: 16px 22px;
    background-color: #72005f;
    margin-top: 40px;
    align-self: center;

    &:hover {
        cursor: pointer;
        background-color: #8b3979;
    }

    @media(max-width: 420px) {
        width:60vw;
        font-size:18px;
        margin: 80px auto 10px auto;
    }

    @media(min-width: 421px) and (max-width: 620px) {
        font-size: 20px;
        width:32vw;
        margin-top: -20px;
        margin-left: 15%;
    }

    @media(min-width: 621px) and (max-width: 720px) {
        width:30vw;
        margin-left:20%;
        font-size: 20px;
        padding: 8px;
    }

`
export const BodeImagem = styled.img`
    width: 30%;
    height:75vh;
    margin-top:20%;
    justify-content: center;
    align-items: center;
    display:flex;
    margin-bottom:100px;
    animation: ${BodeGuru};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

    @media(max-width: 420px){
        height:40vh;
    }

    @media(min-width: 421px) and (max-width: 620px){
        height:50vh;
        width: 28%;
    }
    @media(min-width: 621px) and (max-width: 720px){
        height: 60vh;
        margin-left: 40px;
    }
`