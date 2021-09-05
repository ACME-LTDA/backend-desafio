import React, { Component } from "react";
import { Link } from "react-router-dom";

import ListaVencedores from "./components/lista-vencedores/ListaVencedores";

export class Vencedores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      year: this.props.match.params.year
    };
  }

  render() {
    return (
      <div className="ui container winners-page">
        <div className="ui four column grid centered align">
          <div className="two column row">
            <div className="five column">
              <Link to="/relatorio">&larr; Voltar</Link>
              <h1>Vencedores do ano de {this.state.year}</h1>
            </div>
          </div>
          <div className="two column row">
            <div className="ui segments five column">
              <ListaVencedores year={this.state.year} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}