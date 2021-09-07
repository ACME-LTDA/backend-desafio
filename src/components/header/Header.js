import React, { Component } from "react";

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img className="header-img" src="https://f1fan.gr/wp-content/uploads/2019/03/F1-2021-car-concept.jpg" />
        <img className="logo" src="https://raw.githubusercontent.com/leonandes92/login_ACME/main/images/ACME_logo2.png" />
      </header>
    );
  }
}