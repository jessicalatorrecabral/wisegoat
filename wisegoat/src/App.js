import React from 'react'
import styled, { keyframes }  from 'styled-components'

import ConselhoBode from './components/ConselhoBode'
import bodezinhoGuru from './assets/bodezinho.png'


const BodeGuru = keyframes`
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
const TelaPrincipal = styled.div`
height: 100vh;
display:flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
height: 80vh;
width: 30vw;
display: flex;
flex-direction: column;
justify-content: center;
`
const Wise = styled.h2`
color: #bdb6a4;
width:20vw;
font-size: 48px;
margin-bottom: 0px;
`
const Goat = styled.h1`
width:20vw;
color: #720057;
font-size: 120px;
margin-bottom: 10px;
margin-top: 0px;
`
const Button = styled.button`
width: 20vw;
color: white;
border: none;
border-radius: 10px;
font-size:26px;
padding: 16px 22px;
background-color: #72005f;
margin-top: 55px;

`
const Bode = styled.img`
width: 25%;
height:78vh;
margin-bottom:100px;
animation: ${BodeGuru};
animation-duration: 2s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
`
function App() {
  return (
  
    <TelaPrincipal>
      <Container>
        <Wise>
          Wise
        </Wise>
        <Goat>
          Goat
        </Goat>
      
        <Button>Pedir conselho</Button>
      
      </Container>
      <Bode src={bodezinhoGuru}></Bode>
    
    </TelaPrincipal>
    
  );
}

export default App;
