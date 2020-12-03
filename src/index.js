import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Table from './containers/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import OFFRE from './offres.js';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import startups from './reducers/startups.js';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
const store = createStore(combineReducers({startups}),applyMiddleware(reduxThunk));
store.dispatch({
  type:'SET_STARTUPS',
  startups:[
    {name:'zdjjcvf',website:'esi'}
  ]
})
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
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
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

