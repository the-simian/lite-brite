import React, { Component } from "react";

const PEZ_SIZE = 8;

export default class Matrix extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "0", height: "0", gridModel: [] };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.makePezGridModel();
  }

  makePezGridModel() {
    const { width, height } = this.state;
    const gridWidthAmount = Math.floor(width / PEZ_SIZE);
    const gridHeightAmount = Math.floor(height / PEZ_SIZE);

    const totalPezes = gridWidthAmount * gridHeightAmount;

    var gridModel = Array.apply(null, { length: totalPezes }).map(
      Number.call,
      Number
    );

    this.setState({
      gridModel: gridModel
    });
  }

  makePezGrid() {
    const { width, height, gridModel } = this.state;
    return gridModel.map((gm, i) => {
      return (
        <div
          key={i}
          style={{ width: PEZ_SIZE, height: PEZ_SIZE, background: "red" }}
        />
      );
    });
  }

  render() {
    const pezGrid = this.makePezGrid();

    return <div className="matrix">{pezGrid}</div>;
  }
}
