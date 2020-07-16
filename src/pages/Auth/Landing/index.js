import React from "react";
import "./style.scss";

class Landing extends React.Component {
  render() {
    return (
    <div className="landing-page">
      <div className="title">
        <h1>Treino para todos!</h1>
      </div>
      <div className="content">
        <p>
          Nosso projeto visa disponibilizar treinos para quem gostaria de obter uma vida mais saudável, mas não tem condições ou
          tempo disponível para frequentar uma academia regularmente. Seja na academia, em um parque ou em sua residência, com
          vários equipamentos ou nenhum, é possível fazer atividade física e queremos te auxiliar.
        </p>
      </div>

      <div className="title">
          <h1>Como participar?</h1>
      </div>
      <div className="content">
        <p>
          Muito fácil! Basta fazer o download do nosso App, fazer seu cadastro como aluno e seguir os passos que o aplicativo
          te indicará. Com isso sua ficha será encaminhada a um de nossos professores, que por sua vez fará um treinamento
          perfeito para as suas pretensões e condições.
        </p>
      </div>

      <div className="title">
        <h1>Quem somos nós...</h1>
      </div>
      <div className="content">
        <p>
          Somos graduandos com um objetivo em comum: permitir um estilo de vida mais saudável para todos, em quaisquer
          condições. Vemos esse projeto como um forma para ganharmos experiência no mercado de trabalho além de estarmos
          apostando nesse mercado virtual e mais acessível. Clique aqui para ver mais detalhes do nosso grupo!
        </p>
      </div>
    </div>
    )
  }
}
export default Landing;
