import React from 'react';

import './styles.css';
import EstRes from "../../assets/img/graphics/EstrategiaResultado.svg";
import institucionalVideo from "../../assets/video/ContemporaneoInstitucional.mp4";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Instituicao = () => {
  return (
    <>
        <Header/>
        <div id="page-instituicao">
          <div className="content-row">
            <h1>Nossa história</h1>
            <video src={institucionalVideo} controls></video>
            <p>O Contemporâneo iniciou suas atividades em 1986. Na época, o educador José Yoshio K. Malheiros, diretor do Contemporâneo, lecionava nas residências dos alunos. Em 1995, em razão da crescente procura por educadores particulares de diversas disciplinas, o Contemporâneo passou a ocupar um espaço fixo de atendimento e a contar com uma equipe de 7 educadores. Devido aos excelentes resultados obtidos no decorrer dos anos seguintes, hoje, a equipe Contemporâneo possui mais de 40 educadores formados nas melhores universidades do país.</p>
          </div>
          <div className="content-row reverse">
            <h1>Nossa filosofia</h1>
            <img className="img-est" src={EstRes} alt="Estratégia & Resultado" />
            <p className="text-justify">A partir dos pilares <b>Estratégia</b> e <b>Resultado</b>, temos como objetivo auxiliar na construção de métodos próprios e personalizados de aprendizado. Nossos educadores atuam a partir de planejamentos individuais, elaborados de acordo com a necessidade de cada educando e buscam, por meio da melhor estratégia, garantir que o educando obtenha o melhor de si.</p>
          </div>
        </div>
        <Footer/>
    </>
  );
}

export default Instituicao;