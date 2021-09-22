import React from 'react'
import bodezinhoGuru from '../../assets/bodezinho.png'
import {TelaPaginaInicial, Container, Wise, Goat, BodeImagem} from './styled'

const PaginaInicial = () => {
	return (
        <TelaPaginaInicial>
            <Container>
            	<Wise>
                	Wise
              	</Wise>
              	<Goat>
                	Goat
              	</Goat>
            </Container>
            <BodeImagem src={bodezinhoGuru}></BodeImagem>
        </TelaPaginaInicial>
     )
}
export default PaginaInicial