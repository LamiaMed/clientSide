import React, { Component } from 'react'
import './Table.css'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         Offers: [
            {  name: 'AMAZON', website: 25 },
            {  name: 'clx', website: 19},
            { name: 'Spotify', website: 16},
            { name: 'Microsoft', website: 25}
         ]
      }
   }

   renderTableHeader() {
    let header = Object.keys(this.state.Offers[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
renderTableData() {
    return this.state.Offers.map((offer, index) => {
       const {  name, website} = offer
       return (
          <tr >
       
             <td>{name}</td>
             <td>{website}</td>
          
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>Start-ups List Table</h1>
          <table id='offers'>
             <tbody>
             
                <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}
export default Table 