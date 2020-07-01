import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [show, setShow] = useState(false);

  function doMenu(){
    setShow(!show);  
  }

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "initial";
  }, [show]);

  return (
    <header id="header">
        <img className="Logo" src={logo} alt="Contemporâneo"/>
    
    <div className={show ? 'menu-section on':'menu-section'}>
    <div className="menu-toggle" onClick={doMenu}>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </div>
    <nav>
      <ul>
        <li><Link to="/OContemporaneo">Início</Link></li>
        <li><Link to="/NossaInstituicao">Nossa Instituição</Link></li>
        <li><Link to="/ComoEnsinamos">Como ensinamos</Link></li>
        <li><Link to="/Contato">Contato</Link></li>
      </ul>
    </nav> 
    </div>
  </header>
    );
}

export default Header;