import React, { Component } from "react";
import Ano from "./anos/Ano";
import { Helmet } from 'react-helmet';
import { Paper } from '@material-ui/core';

import "./Relatorio.css";

export class Relatorio extends Component {
  constructor(props) {
    super(props); 
    this.state = { 
    anos: [...this.listaAnos()]
    };
  }

  listaAnos = () => {
    let inicio = 1950;
    let novaData = new Date();
    var ultimoAno = novaData.getFullYear();
    let final = (ultimoAno - 1);

    let anos = [];

    for (let ano = inicio; ano <= final; ano++) {
        anos.push(ano);
    }

    return anos;
  };

  geraAnos = () => {
    return this.state.anos.map(ano =>
      <Paper
      style={{
          minWidth: "200px",
          minHeight: "50px",
          padding: "10px",
          margin: "20px",
          display: "inline-flex",
          justifyContent:"center",
          backgroundColor:"#ffc2b3",
          cursor:"pointer"
      }}
  >
       <Ano key={ano} ano={ano} />
       </Paper>);
  };

  render() {
    return (
      <div>
      <Helmet>
      <style>{'body { background-color: #e6e6e6; }'}</style>
      </Helmet>
      <Paper className="home-list">
      <div className="home-page">
          <h1>Lista de Vencedores</h1>
          <h2>Confira abaixo quem foram os vencedores e quem foi o campeão mundial de cada ano</h2>

                    <div className="">{this.geraAnos()}</div>

          </div>
          </Paper>
    </div>
    );
  }
}