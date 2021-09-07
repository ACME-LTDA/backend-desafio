import React, { Component } from "react";
import { GiTrophy } from "react-icons/gi";

import './CampeaoMundial.css';

export default class CampeaoMundial extends Component {
  render() {
    console.log(this.props.driver);
    const pilotoNome = this.props.driver.givenName;
    const pilotoSobrenome = this.props.driver.familyName;
    const linkWikipedia = this.props.driver.url;
    const isCampeao = this.props.driver.champion;
    return (
      <div>
        <h3>
          {pilotoNome} {pilotoSobrenome} {isCampeao ? <GiTrophy /> : ""}
          <div>
            {isCampeao ? <div>(Campeão Mundial)</div> : ""}
            Página da Wikipedia: <a href={linkWikipedia} target="_blank" rel="noopener noreferrer">
              {linkWikipedia}
            </a>
          </div>
        </h3>
      </div>
    );
  }
}