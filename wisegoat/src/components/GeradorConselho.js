import React from 'react'
import api from '../api'
import styled from 'styled-components'
import goat from '../assets/goat.jpg'


const DivMaster = styled.div`
height: 100vh;
width: 90vw;
`
const Titulo = styled.div`
line-height: 0.5;
width:60px;
height: 50px;
margin-left: 0px;
font-size: 20px;
`
const H3 = styled.h3`
color: #bdb6a4;
`
const H2 =styled.h2`
color: #720057;
`
const MainDiv = styled.div`
display: flex;
width:60%;
margin: 80px auto;
border-radius: 10px;
justify-content:space-between;
background-color: #f2d9ff;
align-items:center;
`
const Advice = styled.div`
padding: 16px;
margin: 0 auto;
text-align:left;
font-size: 36px;
color: #720057;
font-weight:bold;
width: 60%;
background-color: #f2d9ff;
`
const Foto = styled.img`
width:300px;
height: 400px;
border-radius: 10px;
box-sizing:border-box;
`
export default class GeradorConselho extends React.Component{

    state= {
            id: null,
            advice: ""
        }
           
        
    async componentDidMount(){
        const response = await api.get('')
        //console.log(response.data.slip.advice)
        this.setState({advice: response.data.slip.advice, id: response.data.slip.id}) 

    }
    render(){
       return(
            <DivMaster>
                <Titulo>
                    <H3>Wise</H3>
                    <H2>Goat</H2>
                </Titulo>
                   
                <MainDiv>
                    <Advice>
                        <q> {this.state.advice}</q>
                        <p>Goat, Wise</p>
                    </Advice>
                    <Foto src={goat} alt="Bodezinho"/>
                </MainDiv>
            </DivMaster>
          
        )
    }
}