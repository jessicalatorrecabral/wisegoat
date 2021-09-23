import React from 'react'
import { useHistory } from 'react-router'
import bodezinhoGuru from '../../assets/bodezinho.png'
import {TelaPaginaInicial, Container, Wise, Goat, Button, BodeImagem} from './styled'

const PaginaInicial = () => {
	const history = useHistory()

	const irParaPaginaDeConselhos = () => {
		history.push('/conselhos-do-bode')
	}
	return (
        <TelaPaginaInicial>
            <Container>
            	<Wise>
                	Wise
              	</Wise>
              	<Goat>
                	Goat
              	</Goat>
				<Button onClick={irParaPaginaDeConselhos}>Pedir conselho</Button>
            </Container>
            <BodeImagem src={bodezinhoGuru}></BodeImagem>
        </TelaPaginaInicial>
     )
}
export default PaginaInicial