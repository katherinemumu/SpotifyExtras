import React, { Component } from "react";
import spotify_logo from "./spotify_logo.svg"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res}))
        .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={spotify_logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to SpotifyExtras</h1>
          </header>
          <p className="App-intro">{this.state.apiResponse}</p>
        </div>
    );
  }
}

export default App;