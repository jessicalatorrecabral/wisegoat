import React from 'react'
import styled, { keyframes }  from 'styled-components'
import bodezinhoGuru from '../assets/bodezinho.png'


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
const TelaBode = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-bottom: 0px;
margin-top: -80px;
height: 60vh;

`
const Container = styled.div`
margin-top: 0px;
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
const Bode = styled.img`
width: 28%;
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
`

class ConselhoBode extends React.Component {

   render(){
        return (
          <TelaBode>
            <Container>
              <Wise>
              Wise
              </Wise>
              <Goat>
              Goat
              </Goat>
            </Container>
            <Bode src={bodezinhoGuru}></Bode>
          </TelaBode>
     )
      
  }
}

export default ConselhoBode