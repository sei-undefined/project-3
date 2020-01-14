import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import {Route, Link} from 'react-router-dom' 
import Ticket from './components/ticket/Ticket'
import category from './components/data/category'
//import Nav from './components/nav'

class App extends Component{
  
  state={
    category:category,
  }
  deleteTicket = (id) =>{
    // copy the catogry from state 
    let categoryCopy =[...this.state.category];
    //[{},{},{}]
    // filter the array of catogry
    categoryCopy = categoryCopy.filter((element) => (element.id !== id))
    //[{},{}]
    this.setState({
      category:categoryCopy
    })
   }
  render(){
  return (
    <div className="App">
      {/* <Route path="/" component={Nav}/> */}
      
      {this.state.category.map((element,index)=>(
        <Ticket
          key={index}
          object={element}
          delete={this.deleteTicket}
      />))}
      
    </div>
  );
}}

export default App;
