import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./layout/Home.js";
import Admin from "./layout/Admin.js";
import User from "./layout/User.js";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/admin" exact render={props => <Admin {...props} />} />
        <Route path="/user" exact render={props => <User {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
