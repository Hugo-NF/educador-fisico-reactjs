import React from "react";
import "./style.scss";

class Landing extends React.Component {
  render() {
    return (
    <div className="landing-page">          
      <div className="content">
        <div className="background" style={{backgroundImage:"url(" + require("assets/img/landingPage/alongando.jpg") + ")"}}>
        <div className="background-title">
          <h1><b>TREINO<br></br>PARA<br></br>TODOS</b></h1>
        </div>  
        <p className="background-text">
          Nosso projeto visa disponibilizar treinos para quem gostaria de obter uma vida mais saudável mas não tem condições ou
          tempo disponível para frequentar uma academia regularmente. <br></br>
          Seja na academia, em um parque ou em sua residência, com vários equipamentos ou nenhum, é possível fazer atividade 
          física e queremos te auxiliar.
        </p>
        </div>        
      </div>

      <div className="title">
          <h1>Como participar?</h1>
      </div>
      <div className="content">
        <img className="imageslayout" src={require("assets/img/landingPage/abdominal.jpg")} alt="exercicio abdominal"></img>
        <p>
          Para participar desse projeto com a gente é muito fácil! Basta fazer o download do nosso app, se cadastrar como aluno 
          seguir os passos que o aplicativo te indicará e pronto. <br></br> Após o cadastro sua ficha será encaminhada a um de 
          nossos professores, e criaremos um treinamento perfeito especialmente para as suas pretensões e condições. <br></br>
          A melhor parte é que você pode se exercitar sem sair de casa!
        </p>
      </div>

      <div className="title">
        <h1>Quem somos nós...</h1>
      </div>
      <div className="content">
        <img className="imageslayout" src={require("assets/img/landingPage/afundo.jpg")} alt="exercicio afundo"></img>
        <p>
          Somos graduandos com um objetivo em comum: permitir um estilo de vida mais saudável para todos, em quaisquer
          condições.<br></br> Vemos esse projeto como um forma para ganharmos experiência no mercado de trabalho além de 
          estarmos apostando nesse mercado virtual e mais acessível. Clique aqui para ver mais detalhes do nosso grupo!
        </p>
      </div>
    </div>
    )
  }
}
export default Landing;
