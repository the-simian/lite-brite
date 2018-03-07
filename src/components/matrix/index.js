import "./index.css";

import React, { Component } from "react";

import Pez from "../pez";

const PEZ_SIZE = 16;
const BORDER_SIZE = 1.5;
const SPACING_SIZE = 3;

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
    const pezSize = PEZ_SIZE + SPACING_SIZE * 2 + BORDER_SIZE * 2;
    const gridWidthAmount = Math.floor(width / pezSize);
    const gridHeightAmount = Math.floor(height / pezSize);

    var gridModelX = Array.apply(null, { length: gridWidthAmount }).map(
      Number.call,
      Number
    );

    var gridModel = gridModelX.map(gm => {
      return Array.apply(null, { length: gridHeightAmount }).map(
        Number.call,
        Number
      );
    });

    this.setState({
      gridModel: gridModel
    });
  }

  makePezGrid() {
    const { width, height, gridModel } = this.state;
    return gridModel.map((gmx, i) => {
      const row = gmx.map((gmy, ii) => {
        return (
          <Pez
            key={`${i}_${ii}`}
            size={PEZ_SIZE}
            borderWidth={BORDER_SIZE}
            spacing={SPACING_SIZE}
          />
        );
      });

      return <div className={`matrix-row`}>{row}</div>;
    });
  }

  render() {
    if (!this.state.gridModel.length) {
      this.makePezGridModel();
    }

    const pezGrid = this.makePezGrid();

    return (
      <div className="matrix" style={{ display: "flex" }}>
        {pezGrid}
      </div>
    );
  }
}
