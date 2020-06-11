import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FirstPage from "./pages/FirstPage";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={FirstPage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/mainpage" component={MainPage}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </Router>                
        );
    }
}

export default Routes;