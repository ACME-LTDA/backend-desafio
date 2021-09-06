import React, { Component } from "react";
import { GiTrophy } from "react-icons/gi";

export default class CampeaoMundial extends Component {
  render() {
    console.log(this.props.driver);
    const pilotoNome = this.props.driver.givenName;
    const pilotoSobrenome = this.props.driver.familyName;
    const linkWikipedia = this.props.driver.url;
    const isCampeao = this.props.driver.champion;
    return (
      <div className="ui segment winner-row">
        <h3 className="ui header">
          {pilotoNome} {pilotoSobrenome} {isCampeao ? <GiTrophy /> : ""}
          <div className="sub header">
            {isCampeao ? <div>(Campeão Mundial)</div> : ""}
            <a href={linkWikipedia} target="_blank" rel="noopener noreferrer">
              {linkWikipedia}
            </a>
          </div>
        </h3>
      </div>
    );
  }
}