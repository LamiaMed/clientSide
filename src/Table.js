import Axios from 'axios'
import React, { Component } from 'react'
import './Table.css'
import OFFRE from './offres'
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button, Dropdown,
} from 'reactstrap';
import App from './App'
import { BrowserRouter, BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
class Table extends Component {
   constructor(props) {
      super(props)
      this.state = {
         Offers: [],
         
         loading: true,
      }
   }
   componentDidMount() {
      //requete.then((data)=> setState(offerres:[...data],loading:false))
      // Axios.get('https:localhost:3003/api/offre').then((response)=>{this.setState({Offers:[...response],loading:false})});
      Axios.get('http://localhost:3003/api/offre').then(res=> {
       
       
         this.setState({Offers : res.data,loading:false});
         console.log(this.Offers);
      });

   }

   
   renderTableHeader() {
     
      let header = Object.keys(this.state.Offers[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   renderTableData() {
      return this.state.Offers.map((offer, index) => {
         const { name, website } = offer
         return (
            <tr>

               <td >
                  <Link to={'/offre/' + name}>
                     <div className="name">{name}</div>
                  </Link>
               </td>

               <td id="web">{website}</td>


            </tr>

         )

      })
   }

   render() {
      return (
         <div >
            {this.state.loading ?
               'loading...'

               :
               <>
                  <h1 id='title'>Start-ups List Table</h1>
                  <table id='offers'>
                     <tbody>

                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}

                     </tbody>
                  </table>
               </ >
            }
         </div>
      )
   }

}
export default Table 