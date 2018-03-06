import "./pez.css";

import React, { Component } from "react";

export default class Pez extends Component {
  state = {
    color: "",
    colors: ["", "white", "yellow", "red", "purple", "green", "pink", "blue"]
  };
  render() {
    const { size } = this.props;
    const { color } = this.state;
    return (
      <div
        className={`pez ${color}`}
        style={{
          width: size,
          height: size
        }}
        onClick={() => {
          const { colors, color } = this.state;
          const index = colors.indexOf(color);
          const next = index + 1;

          this.setState({
            color: colors[next] ? colors[next] : colors[0]
          });
        }}
      />
    );
  }
}
