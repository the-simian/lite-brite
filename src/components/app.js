import "./app.css";

import React, { Component } from "react";

import Matrix from "./matrix";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Matrix />
      </div>
    );
  }
}
