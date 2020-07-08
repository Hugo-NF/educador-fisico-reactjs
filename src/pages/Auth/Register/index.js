import React from "react";
import "./style.scss";
import { Button } from "reactstrap";

class Register extends React.Component {
  render() {
    return (
      <div className="Register">
        <div className="content">
            <div id="logintext">
                <h1>Faça seu Login</h1>
                <p>Educador físico é um app para aproximar treinadores de alunos para rotinas saudáveis.</p>
            </div>
            <div>
                <form onSubmit={this.handleLogin}>
                  <input className="textbox" type="login" placeholder="Email" onChange={e => this.setState({usuario: e.target.value})}/>
                  <input className="textbox" type="password" placeholder="Senha" onChange={e => this.setState({senha: e.target.value})}/>
                  <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  >Entrar</Button>
                </form>
            </div>
        </div>
      </div>
    )
  }
}
export default Register;
