import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import Header from "../../components/header";
import Footer from "../../components/footer";
import LogoWhatsapp from "../../assets/img/graphics/WhatsApp.svg"; 


const mapString = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7307644990833!2d-46.64595788453026!3d-23.578111268097192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd61c6dfb216e7400!2sAulas%20Contempor%C3%A2neo!5e0!3m2!1spt-BR!2sbr!4v1593564074560!5m2!1spt-BR!2sbr";
const whatsapp ="https://api.whatsapp.com/send?phone=5511991983007&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20me%20surgiu%20uma%20d%C3%BAvida."
const Contato = () => {
  return (
    <>
        <Header/>
        <div id="page-contato">
          <div className="box">
          <h2>Atendimento</h2>
          <p>Nossa secretaria está a um clique de você.</p>
          <a className="whatsapp" href={whatsapp} target="_blank"><img src={LogoWhatsapp}/>Whatsapp</a>
          </div>
          <div className="box">
            <h2>Endereço</h2>
            <p><b>Contemporâneo</b><br/>R. Estela, 283 - Vila Mariana, São Paulo - SP, 04013-003</p>
            <iframe src={mapString}/>
          </div>
        </div>
        <Footer/>
    </>
  );
}

export default Contato;