import React from 'react';

import './styles.css';
import NossosAlunos from '../../assets/img/graphics/NossosAlunos.svg'
import OnboardingTeam from '../../assets/img/graphics/OnboardingTeam.svg'
import { TiArrowRightThick } from 'react-icons/ti';
import Header from "../../components/header";
import Footer from "../../components/footer";

const Ensino = () => {
  return (
    <>
        <Header/>
        <div id="page-ensino">
          <div className="box">
            <h1 className="title">Metodologia de ensino</h1>
            <div className="cards">
            <div className="card">
              <h3>Tutoria pedagógica</h3>
              <p className="text-justify">A Tutoria Pedagógica visa auxiliar o educando a descobrir novos métodos de construção do conhecimento, a organizar a rotina escolar e a desenvolver autonomia para estudar sem apoio.</p>
              <a href="#!">Saiba mais <TiArrowRightThick/></a>
            </div>
            <div className="card">
              <h3>Acompanhamento escolar</h3>
              <p className="text-justify">O Acompanhamento Escolar é ideal para aquele educando que aprensenta dificuldade em alguma disciplina e precisa encontrar novas formas de aprender.</p>
              <a href="#!">Saiba mais <TiArrowRightThick/></a>
            </div>
            <div className="card">
              <h3>Reforço escolar</h3>
              <p className="text-justify">O Reforço Escolar tem por objetivo orientar os educandos diante de dúvidas específicas ou retomar determinados conteúdos que não foram bem compreendidos por eles.</p>
              <a href="#!">Saiba mais <TiArrowRightThick/></a>
            </div>
            </div>
          </div>
          <div className="box">
            <h1 className="title">Nossos alunos</h1>
            <div className="row">
            <img src={NossosAlunos} alt="Nossos alunos"/>
              <div>
              <p className="text-justify order-1">Os educandos dos Anos Iniciais do Ensino Fundamental são estimulados por nossos pedagogos a ampliar as práticas de linguagem e a construir novas interpretações sobre o mundo, enquanto os educandos dos Anos Finais do Ensino Fundamental entram em contato com diferentes áreas do conhecimento que apresentam lógicas específicas e, para articulá-las, por vezes precisam do apoio de educadores especialistas que compreendam a necessidade de desenvolver a percepção do mundo a partir de outros pontos de vista, considerando as particularidades de cada disciplina e de cada educando.</p>
              <p className="text-justify order-2">Nossos educadores especialistas também auxiliam os educandos do Ensino Médio e pré-vestibular a consolidar e aprofundar os conhecimentos adquiridos durante o Ensino Fundamental, inserindo-os em posição de autonomia intelectual e, quando necessário, orientando suas escolhas futuras. Os educandos do Ensino Universitário, por sua vez, se veem diante de grandes desafios acadêmicos e buscam o apoio dos nossos educadores ao se depararem com conteúdos ou disciplinas mais complexas.</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h1 className="title">Organização institucional</h1>
            <div className="content">
            <img src={OnboardingTeam} alt=""/>
              <div>
                <h3>Direção</h3>
                <p className="text-justify">A direção é responsável por articular os setores de relacionamento e pedagógico, traçar metas e garantir a execução dos planejamentos elaborados. Fica também a encargo da direção a administração financeira do Contemporâneo.</p>
                <h3>Coord. Relacionamento</h3>
                <p className="text-justify">A coordenação de relacionamento é responsável por garantir a qualidade das atividades prestadas e atua como uma ponte entre a secretaria, as famílias e os educadores.</p>
                <h3>Coord. Pedagógico</h3>
                <p className="text-justify">A coordenação pedagógica é responsável por traçar, ao lado dos educadores, estratégias individuais de ensino-aprendizagem que respeitem a forma de aprender de cada educando, alinhar as expectativas com as famílias e os demais profissionais que atuam junto ao educando e, caso necessário, sugerir encaminhamentos para outros profissionais.</p>
                <h3>Coord. Desenvolvimento</h3>
                <p className="text-justify">A coordenação de desenvolvimento de sistemas é responsável por planejar, coordenar e executar os projetos de novos portais. Fica também a encargo dessa coordenação arquitetar e dirigir os novos sistemas do Contemporâneo, elaborar propostas para novos projetos, documentar e informatizar processos internos.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  );
}

export default Ensino;