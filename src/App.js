import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/Layout";
import { Route, Router, browserHistory } from "react-router";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout />
      </div>
    );
  }
}

export default App;
