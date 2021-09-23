import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import goat from '../../assets/goat.jpg'
import api from '../../service/Api/api'
import { TelaDeConselhos, Titulo, ConselhoContainer, ConselhoGerado, ImagemBode } from './styled'

const PaginaDeConselhos = () => {
    const history = useHistory()

    const irParaPaginaInicial = () => {
        history.push('/')
    }

    const [conselho, setConselho] = useState("")

    const gerarConselho = async () => {
        const response = await api.get('')
        setConselho(response.data.slip.advice)
    }
        
    useEffect(() => {
        gerarConselho()
    },[])

    return (
        <div>
            <Titulo onClick={irParaPaginaInicial}>
                <h3>Wise</h3>
                <h2>Goat</h2>
            </Titulo>
            <TelaDeConselhos>
                <ConselhoContainer>
                    <ConselhoGerado onClick={gerarConselho} >
                        <q>{conselho}</q>
                        <p>Goat, Wise</p>
                    </ConselhoGerado>
                    <ImagemBode src={goat} alt="Bodezinho"/>
                </ConselhoContainer>
            </TelaDeConselhos>
        </div>
    )
}
export default PaginaDeConselhos