import styled from 'styled-components'

export const TelaDeConselhos = styled.div`
    height: 100vh;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
`
export const Titulo = styled.div`
    line-height: 0.5;
    width:60px;
    height: 50px;
    margin-left: 0px;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Roboto';

    h3 {
        color: #bdb6a4;
    }
    h2 {
        color: #720057;
    }
`

export const ConselhoContainer = styled.div`
    display: flex;
    width: 60%;
    border-radius: 10px;
    justify-content: center;
    background-color: #f2d9ff;
    align-items: center;

    @media(max-width: 767px){
        width:100%;
        margin:80px  auto;
    }
`
export const ConselhoGerado = styled.div`
    padding: 16px;
    margin: 0 auto;
    text-align:left;
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    color: #720057;
    font-weight:bold;
    width: 60%;
    background-color: #f2d9ff;
    cursor: pointer;

    &:hover{
        color:#9b316b;
    }

    @media(max-width: 767px){
        font-size: 18px;
        padding: 8px;
        width:60%;
    }
`
export const ImagemBode = styled.img`
    width:300px;
    height: 400px;
    border-radius: 10px;
    box-sizing:border-box;

    @media(max-width: 767px){
        width:30%;
        height:40%;
    }
`