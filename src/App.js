import React, { Component, useState } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Dropdown,
} from 'reactstrap';
import Axios from "axios";
import './App.css';
import Table from './Table';
import { BrowserRouter, BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import OFFRE from './offres';
const App = ({
  children
}) => {
  const [render, setRender]=useState([false])
  const add = () => {
    setRender(!render)
  }

var Source ="";
var Technology="";
var Contract ="";
var Remote ="";

/*function handlechangeSource(e){
    this.setState({Source: e.target.value});
    console.log('the source is',this.Source);
}*/
  function handleChangeSource(e) {
  Source = e.target.value;  
}
function handleChangeTech(e) {
  Technology = e.target.value;  
}
function handleChangeContrat(e) {
  Contract = e.target.value; 
}
function handleChangeCheck(e) {
  Remote = e.target.checked;
  console.log("the check is",Remote);
  
}
const State={
  Source: '',
  Technology:'',
  Contract:'',
  Remote:'',
}
function Submit() {
  State.Source= Source;
  State.Technology=Technology;
  State.Contract=Contract;
  State.Remote=Remote;
  console.log("state value", State.Source);
}

  return (
    <div>
      <nav className="box">
 
        <div className="element sourcedropdown" >
          <label>Source :</label>
          <select className="form-control" name="Sources" onChange={e=>handleChangeSource(e)} >
            <option selected>Select Source</option>
            <option value="welcome To The Jungle">Welcome To The Jungle</option>
            <option value="Indeed">Indeed</option>
            <option value="Angellist">Angellist</option>
          </select>

        </div>

        <div className="element Techdropdown">
          <label>Technology :</label>
          <select className="form-control" name="Tech" onChange={e=>handleChangeTech(e)}>
            <option selected>Select Technology</option>
            <option className="dropdown-item" value="1">React</option>
            <option className="dropdown-item" value="2">Node</option>
            <option className="dropdown-item" value="3">Angular</option>
          </select>
        </div>


        <div id="contrat" className="element contrat">
          <label>Contract :</label>
          <select className="form-control" name="Tech" onChange={e=>handleChangeContrat(e)}>
            <option selected>Select contract</option>
            <option className="dropdown-item" value="1">CDD</option>
            <option className="dropdown-item" value="2">CDI</option>
            <option className="dropdown-item" value="3">Stage</option>
            <option className="dropdown-item" value="3">Alternance</option>
          </select>
        </div>
        <div id="checkbox" className="element checkbox">
          <label check>
            <input type="checkbox" onChange={e=>handleChangeCheck(e)}/>{' '}
          Remote
         </label>
        </div>
    <Button onClick={e=>Submit()}>Submit</Button>

      </nav>
      <p>'   '</p>
      {children}


    </div>


  );

}


export default App;