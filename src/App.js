import React, { Component} from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Dropdown, 
} from 'reactstrap';
import Axios from "axios";
import './App.css';
import Table from './Table';

class App extends Component {


   render(){
    return (
        <div>
     <div className="box"> 
           
          <div className="element sourcedropdown" >
            <label>Source :</label>
            <select className="form-control" name="Sources" onChange={this.handleChange}>
              <option selected>Select Source</option>
              <option value="1">Welcome To The Jungle</option>
              <option value="2">Indeed</option>
              <option value="3">Angellist</option>
            </select>
          </div>
          <div className="element Techdropdown">
            <label>Technology :</label>
            <select className="form-control" name="Tech"  onChange= {this.handleChange}>
              <option selected>Select Technology</option>
              <option className="dropdown-item" value="1">React</option>
              <option className="dropdown-item" value="2">Node</option>
              <option className="dropdown-item" value="3">Angular</option>
            </select>
          </div>
          
          
          <div id="contrat" className="element contrat">
          <label>Contract :</label>
            <select className="form-control" name="Tech"  onChange= {this.handleChange}>
              <option selected>Select contract</option>
              <option className="dropdown-item" value="1">CDD</option>
              <option className="dropdown-item" value="2">CDI</option>
              <option className="dropdown-item" value="3">Stage</option>
              <option className="dropdown-item" value="3">Alternance</option>
            </select>
          </div>
          <div id="checkbox" className ="element checkbox">
          <label check>
          <input type="checkbox"  onChange= {this.handleChange} />{' '}
          Remote
         </label>
          </div>
           <Button>Submit</Button>
          </div>    
  
        </div>
         
      
    );
   }
}

export default App;