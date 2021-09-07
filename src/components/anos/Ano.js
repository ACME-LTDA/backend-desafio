import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FaFlagCheckered } from "react-icons/fa";

import "./Ano.css";

class Ano extends Component {
  rotaVencedores = () => {
    this.props.history.push("/relatorio/vencedores/" + this.props.ano);
  };

  render() {
    return (
      <div onClick={this.rotaVencedores}>
          <h2 className="ui huge header">
            <div className="content sublinhado"><FaFlagCheckered />   {this.props.ano}</div>
          </h2>
      </div>
    );
  }
}

export default withRouter(Ano);