import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </div>
    );
  }
}

export default App;