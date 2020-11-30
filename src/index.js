import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import OFFRE from './offres.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={() => <Redirect to='/startups' />}></Route>
          <Route path="/startups" component={Table}></Route>
          <Route exact path= "/offre/:name" component={OFFRE}></Route>
          <Route component={() => <Redirect to='/startups' />}></Route>

        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

