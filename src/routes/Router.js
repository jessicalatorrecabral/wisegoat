import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PaginaInicial from '../pages/PaginaInicial/PaginaInicial'
import PaginaDeConselhos from '../pages/PaginaDeConselhos/PaginaDeConselhos'
import PaginaDeErro from '../pages/PaginaDeErro/PaginaDeErro'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={PaginaInicial}/>
                <Route exact path={'/conselhos-do-bode'} component={PaginaDeConselhos}/>
                <Route component={PaginaDeErro}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router