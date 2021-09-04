import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Ano extends Component {
  rotaVencedores = () => {
    this.props.history.push("/relatorio/vencedores/" + this.props.ano);
  };

  render() {
    return (
      <div onClick={this.rotaVencedores}>
          <h2 className="ui huge header">
            <div className="content">{this.props.ano}</div>
          </h2>
      </div>
    );
  }
}

export default withRouter(Ano);