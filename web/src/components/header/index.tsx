import React from 'react';
import {Link} from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';
// import { Container } from './styles';

const header = () => {
  return (
    <header id="header">
        <img className="Logo" src={logo} alt="Contemporâneo"/>
    <nav className="menu-container">
    
    <ul className="menu-list">
      <li><Link to="/OContemporaneo">Início</Link></li>
      <li><Link to="/NossaInstituicao">Nossa Instituição</Link></li>
      <li><Link to="/ComoEnsinamos">Como ensinamos</Link></li>
      <li><Link to="/Contato">Contato</Link></li>
    </ul>
    </nav>  
  </header>
    );
}

export default header;