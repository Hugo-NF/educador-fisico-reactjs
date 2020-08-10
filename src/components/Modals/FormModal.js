import React from "react";

import {
    Button,
    Form,
    Input,
    Modal,
  } from "reactstrap";
  
  class FormModal extends React.Component {
    onClose() {
      this.props.onClose();
    }
    render() {
      const nameExercise = this.props.name;
      const linkExercise = this.props.link;
      return (
        <>
          <Modal
            className="modal-dialog-centered"
            isOpen={this.props.modalVisible}
            toggle={() => this.onClose()}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">
                Cadastro de { this.props.model }
              </h5>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.onClose()}
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
                  value={nameExercise}
                />
                <br/>
                Vídeo de descrição
                <Input
                  type="text"
                  id="exerciseVideo"
                  placeholder="Link para o vídeo do YouTube"
                  value={linkExercise}
                />
              </Form>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => this.onClose()}
              >
                Cancelar
              </Button>
              <Button
                color="primary" type="button" 
                onClick={() => this.onClose()}>
                Cadastrar { this.props.model }
              </Button>
            </div>
          </Modal>
        </>
      );
    }
  }
  
  export default FormModal;