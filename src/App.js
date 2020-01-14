import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom' 
import Ticket from './components/ticket/Ticket'
import category from './components/data/category'
import Home from "./components/home/Home"
import Services from './components/services/services'
import Nav from './components/nav/Nav'
import Category from './components/category/Category'
import QueueCard from './components/queueCard/QueueCard'
import Nearby from './components/nearby/Nearby'

function App() {
return (
    <div className="App">
        
        <Route path="/" component={Nav}/>
        <Route path="/" exact component={Home}/>
        <Route path="/QueueCard/:id" exact component = {QueueCard} /> 
        <Route path= "/nearby" exact component = {Nearby} />
        {/* ticket  */}
        </div>    
      // <Ticket Ticket={category.data} />
  )
}

export default App;
