import React, { Component } from 'react';
import Routes from "./routes.js";
import "./global.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;
