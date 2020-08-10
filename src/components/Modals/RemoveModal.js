import React from "react";

import {
    Button,
    Form,
    Modal,
  } from "reactstrap";
  
  class RemoveModal extends React.Component {
    onClose() {
      this.props.onClose();
    }
    render() {
      return (
        <Modal
          className="modal-dialog-centered"
          isOpen={this.props.modalVisible}
          toggle={() => this.onClose()}
        >
          <div className="modal-header">
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
              Deseja realmente remover esse { this.props.model }: { this.props.object }
            </Form>
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.onClose()}>
              Cancelar
            </Button>
            <Button
              color="primary" type="button" 
              onClick={() => this.onClose()}>
              Ok { this.props.model }
            </Button>
          </div>
        </Modal>
      );
    }
  }
  
  export default RemoveModal;