import React from "react";

import {
    Button,
    Form,
    Input,
    Modal,
  } from "reactstrap";
  
  class FormModal extends React.Component {
    state = {
      formModal: false
    };
    toggleModal = state => {
      this.setState({
        [state]: !this.state[state]
      });
    };
    render() {
      return (
        <>
          <Button type="button" color="primary" onClick={() => this.toggleModal("formModal")}>
            <i className ="ni ni-fat-add" /> Cadastrar { this.props.model }
          </Button>
          <Modal
            className="modal-dialog-centered"
            isOpen={this.state.formModal}
            toggle={() => this.toggleModal("formModal")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">
                Cadastro de exercício
              </h5>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("formModal")}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <Form>
                Exercício
                <Input
                  type="name"
                  id="exerciseName"
                  placeholder="Escreva o nome do exercício ..."
                />
                <br/>
                Vídeo de descrição
                <Input
                  type="text"
                  id="exerciseVideo"
                  placeholder="Link para o vídeo do YouTube"
                />
              </Form>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("formModal")}
              >
                Cancelar
              </Button>
              <Button
                color="primary" type="button" 
                onClick={() => this.toggleModal("formModal")}>
                Cadastrar { this.props.model }
              </Button>
            </div>
          </Modal>
        </>
      );
    }
  }
  
  export default FormModal;