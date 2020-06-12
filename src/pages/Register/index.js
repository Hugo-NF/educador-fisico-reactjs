import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import "./styles.css";

class Register extends Component {
    render() {
        return (
            <div className="Register">
                <Navbar/>
                <p>Register</p>
            </div>
        );
    }
}

export default Register;