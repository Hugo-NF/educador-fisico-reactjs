import React from "react";

import "./style.scss";
import FormModal from "components/Modals/FormModal.js";
import RemoveModal from "components/Modals/RemoveModal.js";

import {
  Button,
} from "reactstrap";

class Exercise extends React.Component {
  state = {
    modalFormVisible: false,
    modalRemoveVisible: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <div className="exercise-page">
        <FormModal model="exercício" modalVisible={this.state.modalFormVisible} onClose={() => this.toggleModal("modalFormVisible")}/>
        <RemoveModal model="exercício" modalVisible={this.state.modalRemoveVisible} onClose={() => this.toggleModal("modalRemoveVisible")}/>
        <div className="title">
          <h1 className="left-title">EXERCÍCIOS</h1>
          <Button type="button" color="primary" onClick={() => this.toggleModal("modalFormVisible")}>
            <i className ="ni ni-fat-add" /> Cadastrar exercício
          </Button>
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
              <td>
                <Button className="icon-button" onClick={() => this.toggleModal("modalFormVisible")}>
                <i className="ni ni-ruler-pencil"/>
                </Button>
              </td>
              <td>Alongamento</td>
              <td>www.youtube.com/alongamento</td>
              <td>
                <Button className="icon-button" onClick={() => this.toggleModal("modalRemoveVisible")}>
                  <i className="ni ni-fat-remove"/>
                </Button>
              </td>
            </tr>
            <tr>
              <td><i className="ni ni-ruler-pencil"/></td>
              <td>Agachamento</td>
              <td>www.youtube.com/agachamento</td>
              <td>
                <Button className="icon-button" onClick={() => this.toggleModal("modalRemoveVisible")}>
                  <i className="ni ni-fat-remove"/>
                </Button>
              </td>
            </tr>
            <tr>
              <td><i className="ni ni-ruler-pencil"/></td>
              <td>Abdominal</td>
              <td>www.youtube.com/abdominal</td>
              <td>
                <Button className="icon-button" onClick={() => this.toggleModal("modalRemoveVisible")}>
                  <i className="ni ni-fat-remove"/>
                </Button>
              </td>
            </tr>
            <tr>
              <td><i className="ni ni-ruler-pencil"/></td>
              <td>Levantamento lateral</td>
              <td>www.youtube.com/levantamentolateral</td>
              <td>
                <Button className="icon-button" onClick={() => this.toggleModal("modalRemoveVisible")}>
                  <i className="ni ni-fat-remove"/>
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Exercise;