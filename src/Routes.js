import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from"../src/pages/index"
import Cadastrar from"../src/pages/cadastrar"
import Editar from"../src/pages/editar"

export default function Routes() {
    
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} />
          <Route path="/cadastrar" component={Cadastrar} />
          <Route path="/editar/:id" component={Editar} />
      </Switch>
    </Router>
  );
}
