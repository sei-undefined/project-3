import React, { Component } from 'react';
//import category from './data/category'
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import category from '../data/category'

class Ticket extends Component {
    state = {  }
    render() { 
        const dateToFormat = '1976-04-19T12:59-0500';
            
 
        
       let  allCatogry=this.props.Ticket;
        return (<div className="container">
            
           
        <div id="accordion" role="tablist">
        <div className="card">
            <div className="card-header"><h2>E-Ticket:</h2>
            <Moment locale="de">{dateToFormat}</Moment></div>
      <div className="card-body">
          <p className="card-title">{this.props.object.name}</p>
        <button className="btn btn-primary" onClick={() => this.props.delete(this.props.object.id)}>Delete{this.props.id}</button></div></div>
        </div></div>
        );
    }
}
 
export default Ticket;