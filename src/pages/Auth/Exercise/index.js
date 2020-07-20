import React from "react";

import "./style.scss";
import FormModal from "components/Modals/FormModal.js";

class Exercise extends React.Component {
  render() {
    return (
      <div className="exercise-page">
        <div className="title">
          <h1 className="left-title">EXERCÍCIOS</h1>
          <FormModal model="exercício" mode="Cadastrar"/>
        </div>
        <div className="content">
          <table>
            <tr>
              <th>Editar</th>
              <th>Exercício</th>
              <th>Vídeo</th>
              <th>Remover</th>
            </tr>
            <tr>
              <td><i className="ni ni-ruler-pencil"/></td>
              <td>Alongamento</td>
              <td>www.youtube.com/alongamento</td>
              <td><i className="ni ni-fat-remove"/></td>
            </tr>
            <tr>
              <td><i className="ni ni-ruler-pencil"/></td>
              <td>Agachamento</td>
              <td>www.youtube.com/agachamento</td>
              <td><i className="ni ni-fat-remove"/></td>
            </tr>
            <tr>
              <td><i className="ni ni-ruler-pencil"/></td>
              <td>Abdominal</td>
              <td>www.youtube.com/abdominal</td>
              <td><i className="ni ni-fat-remove"/></td>
            </tr>
            <tr>
              <td><i className="ni ni-ruler-pencil"/></td>
              <td>Levantamento lateral</td>
              <td>www.youtube.com/levantamentolateral</td>
              <td><i className="ni ni-fat-remove"/></td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Exercise;