import React, { Component } from "react";
import Ano from "./anos/Ano";

export class Relatorio extends Component {
  constructor(props) {
    super(props); 
    this.state = { 
    anos: [...this.listaAnos()]
    };
  }

  listaAnos = () => {
    let inicio = 1980;
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
    return this.state.anos.map(ano => <Ano key={ano} ano={ano} />);
  };

  render() {
    return (
      <div>
        <h1>Veja quem foi vencedor em cada ano</h1>
        <div>{this.geraAnos()}</div>
      </div>
    );
  }
}