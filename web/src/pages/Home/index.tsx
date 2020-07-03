import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';

import Header from "../../components/header";
import Footer from "../../components/footer";

import banner from "../../assets/img/backgrounds/main-header.svg"
import EstRes from "../../assets/img/graphics/EstrategiaResultado.svg";
import PilaresCont from "../../assets/img/graphics/PilaresContemporaneo.svg";
import YoshioProfile from "../../assets/img/profile/YoshioProfile.svg";
import MariliaProfile from "../../assets/img/profile/MariliaProfile.svg";
import AllanProfile from "../../assets/img/profile/AllanProfile.svg";
import TiagoProfile from "../../assets/img/profile/TiagoProfile.svg";

const Home = () => {
  return (
    <>
      <Header/>  
      <div id="page-home">
        <img src={banner}/>
      <div className="header-container">
    <h1>Uma história de 34 anos de excelência, dedicação e aprendizado.</h1>
    <p>"O Instituto Contemporâneo iniciou suas atividades em 1986. Na época, o professor José Yoshio Malheiros, diretor do Instituto, lecionava nas residências dos alunos. Em 1995, em razão da crescente..."</p>
    <Link to="/NossaInstituicao">
      <strong>Continue lendo <FiChevronRight/></strong> 
    </Link>
    </div>
      </div>
        <main id="container">
          <div className="content-row">
            <img className="img-est" src={EstRes} alt="Estratégia & Resultado" />
            <p className="text-justify">A partir dos pilares <b>Estratégia</b> e <b>Resultado</b>, temos como objetivo auxiliar na construção de métodos próprios e personalizados de aprendizado. Nossos educadores atuam a partir de planejamentos individuais, elaborados de acordo com a necessidade de cada educando e buscam, por meio da melhor estratégia, garantir que o educando obtenha o melhor de si.</p>
          </div>
          <div className="content-column gray">
            <img className="img-pilares" src={PilaresCont} alt="Pilares Contemporâneo" />
            <div className="itens">
              <h2 className="text-center"><span>+34</span> anos de experiência.</h2>
              <p className="text-justify"><span>Contar com o Contemporâneo é</span> contar com mais de três décadas de experiência em aulas particulares, ministradas a partir de metodologias eficientes e planejamentos personalizados para cada educando.</p>
            </div>
            <div className="itens">
              <h2 className="text-center"><span>+40</span> educadores especialistas disponíveis.</h2>
              <p className="text-justify"><span>Contar com o Contemporâneo é</span> contar com educadores especialistas disponíveis para diversos modelos de aulas, ministradas em nosso centro educacional, remotamente ou na residência dos educandos.</p>
            </div>
            <div className="itens">
              <h2 className="text-center"><span>+170.000</span> horas de aulas aplicadas.</h2>
              <p className="text-justify"><span>Contar com o Contemporâneo é</span> contar com vasta experiência prática, que confere aos nossos educadores maior traquejo para orientar os educandos diante das suas dificuldades, transformando-os em protagonistas do seu processo de aprendizagem.</p>
            </div>
          </div>

          <div className="content-column">
            <h1 className="text-spotlight">Experiência e conhecimento são a base dos nossos educadores</h1>
          </div>
        </main>
        
        <div className="cards-background">
        <div className="cards">
          <div className="card">
              <img className="img-card" src={YoshioProfile} alt="Yoshio Malheiros"/>
              <h4>Yoshio Malheiros</h4>
              <h5>Direção</h5>
            </div>
              <div className="card">
              <img className="img-card" src={MariliaProfile} alt="Marilía Westin"/>
              <h4>Marilía Westin</h4>
              <h5>Coordenação Pedagógica</h5>
            </div>
            <div className="card">
              <img className="img-card" src={AllanProfile} alt="Allan Amorim"/>
              <h4>Allan Amorim</h4>
              <h5>Desenvolvimento de Sistemas</h5>
            </div>
            <div className="card">
              <img className="img-card" src={TiagoProfile} alt="Tiago Obeid"/>
              <h4>Tiago Obeid</h4>
              <h5>Relacionamento</h5>
            </div>
          </div>
        </div>
        <Footer />
    </>
  );
}

export default Home;