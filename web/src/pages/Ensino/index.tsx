import React, {useState, useEffect} from 'react';

import './styles.css';
import '../../assets/utils/css/modal.css';
import NossosAlunos from '../../assets/img/graphics/NossosAlunos.svg'
import OnboardingTeam from '../../assets/img/graphics/OnboardingTeam.svg'
import { TiArrowRightThick } from 'react-icons/ti';
import { RiCloseLine } from 'react-icons/ri';

import Header from "../../components/header";
import Footer from "../../components/footer";
import { title } from 'process';

//import Modal from "../../components/modal";

const Ensino = () => {
  const [open, setOpen] = useState(false);
  const [modalActivate, setModalActivate] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  

  function handleModalRequest(id :number){
    switch (id) {
      case 0:
        setTitle("Tutoria Pedagógica")
        setText("A Tutoria Pedagógica tem como objetivo orientar o educando diante das suas dificuldades escolares e é ministrada por um educador tutor vinculado à área do conhecimento sobre a qual o aluno apresenta menos afinidade. O tutor se preocupará em propor novos métodos de construção do conhecimento e auxiliar na organização da rotina escolar, visando o desenvolvimento de autonomia por parte do educando. Quando necessário, o tutor recomendará intervenções específicas de educadores especialistas, sob os moldes de Reforço ou de Acompanhamento Escolar. A Tutoria conta com relatórios de desenvolvimento, enviados às famílias a cada bimestre.")
        break;
      case 1:
        setTitle("Acompanhamento Escolar")
        setText("Por se tratar de uma intervenção realizada no decorrer de um período mais longo, além de revisar os conteúdos vistos em sala, no Acompanhamento Escolar, o educador especialista na disciplina em questão se preocupará em desenvolver, junto ao educando, novos métodos de construção do conhecimento a partir da sua necessidade específica. Para otimizar o trabalho, contamos com relatórios de desenvolvimento, enviados às famílias a cada bimestre.")
        break;
      case 2:
        setTitle("Reforço Escolar")
        setText("O Reforço Escolar consiste na revisão dos conteúdos vistos em sala e é orientado por um educador especialista na disciplina em questão. Por se tratar de uma intervenção pontual, as aulas serão marcadas a partir da demanda do educando, sem periodicidade pré-estabelecida e sem horários fixos.")
      break;
      default:
        setTitle("")
        setText("")
        break;
    }
    setOpen(!open);
  }

  function Modal(){
    document.body.style.overflow = open ? "hidden" : "initial";

    return (
      <div id="modal" className={open ? "on": "" }>
          <div className="body">
            <header>
                <div className="close" onClick={() => handleModalRequest(0)}><RiCloseLine/></div>
            </header>
            <main className="content">
                <h1>{title}</h1>
                <p>{text}</p>
            </main>
          </div>
      </div>
  );
  }

  return (
    <>
        <Header/>
        {Modal()}
        <div id="page-ensino">
          <div className="box">
            <h1 className="title">Metodologia de ensino</h1>
            <div className="cards">
            <div className="card">
              <h3>Tutoria Pedagógica</h3>
              <p className="text-justify">A Tutoria Pedagógica visa auxiliar o educando a descobrir novos métodos de construção do conhecimento, a organizar a rotina escolar e a desenvolver autonomia para estudar sem apoio.</p>
              <a onClick={() => handleModalRequest(0)}>Saiba mais <TiArrowRightThick/></a>
            </div>
            <div className="card">
              <h3>Acompanhamento Escolar</h3>
              <p className="text-justify">O Acompanhamento Escolar é ideal para aquele educando que aprensenta dificuldade em alguma disciplina e precisa encontrar novas formas de aprender.</p>
              <a onClick={() => handleModalRequest(1)}>Saiba mais <TiArrowRightThick/></a>
            </div>
            <div className="card">
              <h3>Reforço Escolar</h3>
              <p className="text-justify">O Reforço Escolar tem por objetivo orientar os educandos diante de dúvidas específicas ou retomar determinados conteúdos que não foram bem compreendidos por eles.</p>
              <a onClick={() => handleModalRequest(2)}>Saiba mais <TiArrowRightThick/></a>
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
                <h3>Coord. Pedagógica</h3>
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