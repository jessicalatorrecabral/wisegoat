import React from 'react'
import styled from 'styled-components'
import ConselhoBode from './components/ConselhoBode'
import bodezinhoGuru from './assets/bodezinho.png'

const TelaPrincipal = styled.div`

height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const WiseGoat = styled.h1`
color: #BAA193;
font-family:;
`

const ButtonPrincipal = styled.button`
background-color: #72005F;
border-radius: 8px;
width: 20%;

`

const ImagemBode = styled.img`
border: solid green 2px;
height: 50%;



`


function App() {
  return (
  
    <TelaPrincipal>
      <WiseGoat>Wise</WiseGoat>
      <ButtonPrincipal>Pedir Conselho</ButtonPrincipal>
        <ImagemBode src={bodezinhoGuru}/>
      
    </TelaPrincipal>
    
  );
}

export default App;
