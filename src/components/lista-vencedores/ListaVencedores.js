import React, { Component } from "react";
import * as ErgastAPI from "../../services/ErgastAPI";
import CampeaoMundial from "../campeoes/CampeaoMundial";
import { ShimmerTitle } from "react-shimmer-effects";

export default class ListaVencedores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      year: this.props.year,
      pilotos: []
    };
  }

  componentDidMount() {

    Promise.all([ErgastAPI.listaCampeao(this.state.year), ErgastAPI.listaVencedores(this.state.year)]).then(res => {

      let champion = res[0].MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
      champion.champion = true;
      
      let pilotos = res[1].MRData.RaceTable.Races.map(race => race.Results[0].Driver);

      let pilotosDict = {};
      for (let piloto of pilotos) {
        if (!pilotosDict[piloto.driverId]) {

          if (piloto.driverId !== champion.driverId) {
            piloto.champion = false;
            pilotosDict[piloto.driverId] = piloto;
          }
        }
      }

      this.setState({
        loaded: true,
        pilotos: [champion, ...Object.values(pilotosDict)]
      });

    });
  }

  generateWinnersRow = () => {
    return this.state.pilotos.map(driver => 
    <CampeaoMundial 
      key={driver.driverId} 
      driver={driver} 
      style={{
        width: "100%",
        padding: "10px",
        margin: "20px",
        display: "inline-flex",
        justifyContent:"center",
    }} />);
  };

  render() {
    return this.state.loaded ? (
      this.generateWinnersRow()
    ) : (
      <div>
        <ShimmerTitle />
        <ShimmerTitle />
        <ShimmerTitle />
        <ShimmerTitle />
    </div>
    );
  }
}