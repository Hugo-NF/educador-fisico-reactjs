import React from "react";

import {
    Button,
    Form,
    Modal,
  } from "reactstrap";
  
  class RemoveModal extends React.Component {
    state = {
      removeModal: false
    };
    toggleModal = state => {
      this.setState({
        [state]: !this.state[state]
      });
    };
    render() {
      return (
        <>
          <Button className="icon-button" onClick={() => this.toggleModal("removeModal")}>
          <i className="ni ni-fat-remove"/> { this.props.model }
          </Button>
          <Modal
            className="modal-dialog-centered"
            isOpen={this.state.removeModal}
            toggle={() => this.toggleModal("removeModal")}
          >
            <div className="modal-header">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("removeModal")}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <Form>
                Deseja realmente remover esse exercício?                              
              </Form>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("removeModal")}>
                Cancelar
              </Button>
              <Button
                color="primary" type="button" 
                onClick={() => this.toggleModal("removeModal")}>
                Ok { this.props.model }
              </Button>
            </div>
          </Modal>
        </>
      );
    }
  }
  
  export default RemoveModal;