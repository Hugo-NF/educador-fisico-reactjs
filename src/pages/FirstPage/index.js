import React, { Component } from 'react';
import "./styles.css";
import Navbar from "../../components/Navbar";

class FirstPage extends Component {
    constructor(){
        super();
        this.state = {
        }
    }


    render() {
        return (
            <div className="FirstPage">
                
                <Navbar/>
            </div>
        );
    }
}

export default FirstPage;