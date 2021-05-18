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
  background-color: #8b3979;
}
@media(max-width: 420px){
 width:60vw;
 font-size:18px;
 margin: 80px auto 10px auto;
}

@media(min-width: 421px) and (max-width: 620px){
font-size: 20px;
width:32vw;
margin-top: -20px;
margin-left: 15%;
}
@media(min-width: 621px) and (max-width: 720px){
  width:30vw;
  margin-left:20%;
  font-size: 20px;
  padding: 8px;
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
