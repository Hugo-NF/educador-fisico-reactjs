import React, { Component } from 'react';
import "./styles.css";
import Botao from "../../components/Botao";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            usuario: '',
            senha: ''
        }
    }

    handleLogin = e => {

        e.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <Navbar/>

                <div className="content">
                    <div id="logintext">
                        <h1>Faça seu Login</h1>
                        <p>Educador físico é um app para aproximar treinadores de alunos para rotinas saudáveis.</p>
                    </div>
                    <div>
                        <form onSubmit={this.handleLogin}>
                            <input className="textbox" type="login" placeholder="Email" onChange={e => this.setState({usuario: e.target.value})}/>
                            <input className="textbox" type="password" placeholder="Senha" onChange={e => this.setState({senha: e.target.value})}/>
                            <Botao value="Entrar"/>
                        </form>
                        <p><Link className="registrar" to="/register">Não tenho login</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;