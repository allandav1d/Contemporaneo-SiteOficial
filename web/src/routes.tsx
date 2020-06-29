import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Invite from './pages/Invite'
import Home from './pages/Home'
import Instituicao from './pages/Instituicao'
import Ensino from './pages/Ensino'
import Contato from './pages/Contato'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Invite} path="/" exact/>
            <Route component={Home} path="/OContemporaneo" />

            <Route component={Instituicao} path="/NossaInstituicao" />
            <Route component={Ensino} path="/ComoEnsinamos" />
            <Route component={Contato} path="/Contato" />
        </BrowserRouter>
    );
}

export default Routes;