import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import "./styles.css";


class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <Navbar/>
                <p>Main Page</p>
            </div>
        );
    }
}

export default MainPage;