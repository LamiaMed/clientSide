import React, { Component, useState } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Dropdown,
} from 'reactstrap';
import Axios from 'axios';
import './App.css';
import Table from './Table';
import { BrowserRouter, BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import OFFRE from './offres';
import NavForm from './containers/NavForm';


const App = ({

  children
}) => {



  /*function handlechangeSource(e){
      this.setState({Source: e.target.value});
      console.log('the source is',this.Source);
  }*/


  // var Startups=res.data
  //var loading= false 

  //   var size= Startups.length
  /*  console.log("result is",Startups);
    console.log("size is",size);*/

  //requete.then((data)=> setState(offerres:[...data],loading:false))





  return (
    <div>
      <NavForm></NavForm>
      <p>    </p>
      {children}


    </div>


  );

}


export default App;