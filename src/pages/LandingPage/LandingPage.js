import React from "react";
import "./style.scss";

class LandingPage extends React.Component {
  render() {
    return (
    <div className="LandingPage">
      <div className="Title">
        <h1>Treino para todos!</h1>
      </div>
      <div className="Content">
        <p>
          Este projeto visa disponibilizar treinos para quem gostaría de obter uma vida mais saudável, mas não tem condições de
          frequentar uma academia regularmente. Seja a academia, em um parque ou em sua residência, com vários equipamentos ou
          nenhum, é possível fazer atividade física e queremos te auxiliar.
        </p>
      </div>

      <div className="Title">
          <h1>Como participar!</h1>
      </div>
      <div className="Content">
        <p>
          Muito fácil! Basta fazer o download do nosso App, e fazer seu cadastro como aluno e seguir 2 passos que o aplicativo
          te indicará. Com isso sua ficha será encaminhada a um de nossos professores, que por sua vez fará um treinamento
          perfeito para as suas condições e pretensões.
        </p>
      </div>

      <div className="Title">
        <h1>Quem somos nós!</h1>
      </div>
      <div className="Content">
        <p>
          Somos todos graduandos com um objetivo em comum: permitir um estilo de vida mais saudável para todos, em quaisquer
          condições. Vemos este projeto como um forma para ganharmos experiência no mercado de trabalho além de estamos
          apostando nesse mercado virtual e mais acessível. Clique aqui para ver mais detalhes do nosso grupo!
        </p>
      </div>
    </div>
    )
  }
}
export default LandingPage;
