import React from 'react';


import './styles.css';
import logo from '../../assets/logo-white.svg';

const footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="item">
            <img src={logo} alt="Contemporâneo" width="100%"/>
          </div>
          <div className="item">
            <h3>Mídias</h3>

          </div>
          <div className="item">
            <address>
            <b>Contemporâneo</b><br/>
            Rua Estela, 283<br/>
            São Paulo, 04011-001<br/>
            Tel: (011) 5084-9733<br/>
            </address>
          </div>
        </div>
      </div>
      <div id="copyright">
        <div className="container"> 
          <p>© 2020 Copyright: aulascontemporaneo.com.br</p> 
        </div>
      </div>
    </footer>
  );
}

export default footer;