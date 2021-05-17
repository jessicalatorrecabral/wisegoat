import React from 'react'
import styled from 'styled-components'
import ConselhoBode from './components/ConselhoBode'
import GeradorConselho from './components/GeradorConselho'


const TelaPrincipal = styled.div`
height: 100vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Button = styled.button`
width: 20vw;
color: white;
border: none;
border-radius: 10px;
font-size:26px;
padding: 16px 22px;
background-color: #72005f;
margin-top: -20px;
margin-left: 23%;
align-self: flex-start;
&:hover{
  cursor: pointer;
  background-color: #8b3978;
}

`

class App extends React.Component {

  state={
    pagina: 1
    
  }
  renderizarPagina = () =>{
    if(this.state.pagina === 1){
      return <ConselhoBode/>
    } 
    if(this.state.pagina > 1){
      return <GeradorConselho/>
    }
    
  }
 
  trocarDePagina = () => {

    this.setState({pagina: this.state.pagina + 1})
      
    }

  
  render(){
  return (
   <TelaPrincipal>
     
     {this.renderizarPagina()}
     {this.state.pagina === 1 ? <Button onClick={this.trocarDePagina}>Pedir conselho</Button> : false}
     
   </TelaPrincipal>
  );
  }
}

export default App;
