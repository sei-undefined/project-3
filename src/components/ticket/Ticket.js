import React, { Component } from 'react';
import category from './category'

class Ticket extends Component {
    state = {  }
    render() { 
       let  allCatogry=this.props.Ticket;
        return (<div>
        
    <p><h1>Your Ticket:</h1>{allCatogry.map(element=> <li>{element.name}</li>)}</p>
        </div>
        );
    }
}
 
export default Ticket;