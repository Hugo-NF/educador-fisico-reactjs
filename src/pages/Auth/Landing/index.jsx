import React, { useEffect } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export default function Landing(props) {
  useEffect(() => {
    // Sets browser tab name
    const { title } = props;
    window.document.title = title;
  });

  return (
    <div className="landing-page">
      <div className="title">
        <h1>Treino para todos!</h1>
      </div>
      <div className="content">
        <p>
          Este projeto visa disponibilizar treinos para quem gostaría de obter uma vida mais saudável, mas não tem condições de
          frequentar uma academia regularmente. Seja a academia, em um parque ou em sua residência, com vários equipamentos ou
          nenhum, é possível fazer atividade física e queremos te auxiliar.
        </p>
      </div>

      <div className="title">
        <h1>Como participar!</h1>
      </div>
      <div className="content">
        <p>
          Muito fácil! Basta fazer o download do nosso App, e fazer seu cadastro como aluno e seguir 2 passos que o aplicativo
          te indicará. Com isso sua ficha será encaminhada a um de nossos professores, que por sua vez fará um treinamento
          perfeito para as suas condições e pretensões.
        </p>
      </div>

      <div className="title">
        <h1>Quem somos nós!</h1>
      </div>
      <div className="content">
        <p>
          Somos todos graduandos com um objetivo em comum: permitir um estilo de vida mais saudável para todos, em quaisquer
          condições. Vemos esse projeto como um forma para ganharmos experiência no mercado de trabalho além de estamos
          apostando nesse mercado virtual e mais acessível. Clique aqui para ver mais detalhes do nosso grupo!
        </p>
      </div>
    </div>
  );
}

// PropTypes for Landing page
Landing.propTypes = {
  title: PropTypes.string.isRequired,
};
