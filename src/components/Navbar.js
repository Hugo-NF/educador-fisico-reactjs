import React, { Component } from 'react';
import Botao from "./Botao";
import { Link } from "react-router-dom";
import Logo from "../assets/Treine100.jpg"


class Navbar extends Component {
    render() {
        return (
            <header className="Navbar">
                <menu>
                    <figure className="logo"><Link to="/"><img src={Logo} alt="logo"/></Link></figure>
                    <ul>
                        <li><Link to="/login"><Botao value="Login"/></Link></li>
                        <li><Link to="/register"><Botao value="Register"/></Link></li>
                        <li><Link to="/mainpage"><Botao value="MainPage"/></Link></li>
                        <li><Link to="/"><Botao value="none"/></Link></li>
                        <li><Link to="/"><Botao value="none"/></Link></li>
                    </ul>
                </menu>
            </header>
        );
    }
}

export default Navbar;