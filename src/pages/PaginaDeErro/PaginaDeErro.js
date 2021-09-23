import React from "react";
import { useHistory } from "react-router";
import lewis from '../../assets/Lewis.jpg'
import { Erro, TelaErro, FraseLewisContainer, FraseLewis } from './styled'

const PaginaDeErro = () => {
    const history = useHistory()

    const irParaPaginaInicial = () => {
        history.push('/')
    }
    return (
        <div>
            <Erro>Página não encontrada</Erro>

            <TelaErro>
                <FraseLewisContainer onClick={irParaPaginaInicial}>
                    <FraseLewis>
                        <q>Se você está no caminho errado, voltar para trás significa progresso</q>
                        <p>C. S. Lewis</p>
                    </FraseLewis>
                    <img src={lewis}/>
                </FraseLewisContainer>
            </TelaErro>
        </div>
    )
}
export default PaginaDeErro