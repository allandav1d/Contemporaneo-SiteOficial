import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

const Invite = () => {
  return (
    <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Contemporâneo"/>
                </header>

                <main>
                    <h1>Conheça o Contemporâneo</h1>
                    <p>Ajudamos nossos educandos a descobrirem novas formas de aprender. </p>
                
                    <Link to="/OContemporaneo">
                    <span><FiLogIn/></span>
                      <strong>Descubra o Contemporâneo</strong>
                    </Link>
                </main>
            </div>
    </div>
  );
}

export default Invite;

