import Axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './Table.css'

class OFFRE extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         Offers: [
           /* {  Poste: 'Mobile Dev', Salaire: '25$' , Travail:'Remote',Skills:"Flutter",Description:"zv hgezef yzgrucboz yegcubz zygrbzjr yrezcbzeygr zgr" },
            {  Poste: 'Mobile Dev', Salaire: '25$' , Travail:'Remote',Skills:"Flutter",Description:"zv hgezef yzgrucboz yegcubz zygrbzjr yrezcbzeygr zgr" },*/

         ],
        loading: true,
      }
      console.log(this.props);
   }
  /* componentDidMount() {
      //requete.then((data)=> setState(offerres:[...data],loading:false))
      Axios.get('http://localhost:3003/api/offre').then(res=> {
       
        
         this.setState({Offers : res.data,loading:false});
         console.log("result",this.Offers);
        
      });

   }*/

   renderTableHeader() {
    let header = Object.keys(this.state.Offers[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
renderTableData() {
    return this.state.Offers.map((offer, index) => {
       const {  Poste,Salaire, Travail, Skills,Contrat, Diplome, Description} = offer
       return (
          <tr >
       
             <td>{Poste}</td>
             <td>{Salaire}</td>
             <td>{Travail}</td>
             <td>{Skills}</td>
             <td>{Contrat}</td>
             <td>{Diplome}</td>
             <td>{Description}</td>
             <td>
                <div className="name">{Description}</div></td>
             
          
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
          <h1 id='title'>Offers List Table</h1>
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
export default withRouter(OFFRE)