import React, { Component } from 'react';
import "./styles.css";
import Botao from "../../components/Botao";
import { Link } from "react-router-dom";

class FirstPage extends Component {
    constructor(){
        super();
        this.state = {
        }
    }


    render() {
        return (
            <div className="FirstPage">
                <ul className="menu">
                    <li><Link to="/login"><Botao value="Login"/></Link></li>
                    <li><Link to="/register"><Botao value="Register"/></Link></li>
                    <li><Link to="/mainpage"><Botao value="MainPage"/></Link></li>
                </ul>
            </div>
        );
    }
}

export default FirstPage;