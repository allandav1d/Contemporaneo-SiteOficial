import React from 'react';

import './styles.css';

import Header from "../../components/header";
import Footer from "../../components/footer";

import EstRes from "../../assets/EstrategiaResultado.svg";
import PilaresCont from "../../assets/PilaresContemporaneo.svg";
import YoshioProfile from "../../assets/img/profile/YoshioProfile.svg";

const Home = () => {
  return (
    <>
      <Header/>  
      <div className="content">
            <p>banner</p>
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
              <p className="text-justify"><span>Contar com o Contemporâneo é</span> contar com educadores especialistas disponíveis para diversos modelos de aulas, ministradas em nosso centro educacional ou na residência dos educandos.</p>
            </div>
            <div className="itens">
              <h2 className="text-center"><span>+170.000</span> horas de aulas aplicadas.</h2>
              <p className="text-justify"><span>Contar com o Contemporâneo é</span> contar com vasta experiência prática, que confere aos nossos educadores maior traquejo para orientar os educandos diante das suas dificuldades, transformando-os em protagonistas do seu processo de aprendizagem.</p>
            </div>
          </div>

          <div className="content-column">
            <h1 className="text-spotlight">Experiência e conhecimento são a base dos nossos educadores</h1>
          </div>

          <div className="cards">
              <div className="card">
              <img className="img-card" src={YoshioProfile} alt="Marilía Westin"/>
              <h4>Marilía Westin</h4>
              <h5>Função</h5>
            </div>
            <div className="card">
              <img className="img-card" src={YoshioProfile} alt="Yoshio Malheiros"/>
              <h4>Yoshio Malheiros</h4>
              <h5>Função</h5>
            </div>
            <div className="card">
              <img className="img-card" src={YoshioProfile} alt="Tiago Obeid"/>
              <h4>Tiago Obeid</h4>
              <h5>Função</h5>
            </div>
          </div>
          
        </main>
        <div className="cards-background"></div>
        <Footer />
    </>
  );
}

export default Home;