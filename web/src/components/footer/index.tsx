import React from 'react';


import './styles.css';
import logo from '../../assets/logo-white.svg';
import whatsapp from '../../assets/img/graphics/WhatsApp.svg';
import instagram from '../../assets/img/graphics/Instagram.svg';
import facebook from '../../assets/img/graphics/Facebook.svg';

const footer = () => {
  const linkWatsapp ="https://api.whatsapp.com/send?phone=5511991983007&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20me%20surgiu%20uma%20d%C3%BAvida.";
  const linkInstagram ="https://www.instagram.com/aulascontemporaneo/";
  const linkFacebook ="https://www.facebook.com/AulasContemporaneo/";

  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="item">
            <img src={logo} alt="Contemporâneo" width="100%"/>
          </div>
          <div className="item">
            <h3>Mídias</h3>
            <div className="midia">
              <a href={linkWatsapp} target="_blank"><img src={whatsapp} alt=""/></a>
              <a href={linkInstagram} target="_blank"><img src={instagram} alt=""/></a>
              <a href={linkFacebook} target="_blank"><img src={facebook} alt=""/></a>
            </div>
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