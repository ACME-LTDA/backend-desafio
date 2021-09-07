import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Paper } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import "./Vencedores.css";
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
    <div>
      <Helmet>
        <style>{'body { background-color: #e6e6e6; }'}</style>
      </Helmet>
            <Paper className="lista-vencedores">
      <Link to="/whatever" className="sublinhado">&larr; Voltar</Link>
        <h1>Vencedores do ano de {this.state.year}</h1>
          <ListaVencedores year={this.state.year} />
          </Paper>
    </div>
    );
  }
}