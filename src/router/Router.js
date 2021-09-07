import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Relatorio } from "../components/Relatorio";
import { Vencedores } from "../components/Vencedores";
import Header from "../components/header/Header";

export default () => (
  <BrowserRouter>
    <Header />
    <Route path="/relatorio" exact component={Relatorio} />
    <Route path="/relatorio/vencedores/:year" exact component={Vencedores} />
  </BrowserRouter>
);