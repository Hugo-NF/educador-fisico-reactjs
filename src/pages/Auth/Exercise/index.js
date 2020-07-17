import React from "react";
import "./style.scss";

class Exercise extends React.Component {
  render() {
    return (
  <>
    <div className="exercise-page">
      <div className="title">
        <h1 className="left-title">EXERCÍCIOS</h1>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          <i className ="ni ni-fat-add" /> Cadastrar novo exercício
        </button>
      </div>
      <div className="content">
        <table className="tabela">
          <tr>
            <th>Editar</th>
            <th>Exercício</th>
            <th>Vídeo</th>
            <th>Deletar</th>
          </tr>
          <tr>
            <td><i className="ni ni-ruler-pencil"/></td>
            <td>Agachamento</td>
            <td>www.youtube.com</td>
            <td><i className="ni ni-fat-remove"/></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>
    )
  }
}

export default Exercise;