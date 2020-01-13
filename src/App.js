import React from 'react';
import './App.css';
// import {Route} from 'react-router-dom' 
// import Ticket from './components/ticket/Ticket'
// import category from './components/data/category'


// import Nav from './components/nav/Nav'
import CardContainer from './components/category/CardContainer'


// importing QueueCard tag
// import QueueCard from './components/queue_card/QueueCard'
import {Route, Link} from 'react-router-dom' 
import Ticket from './components/ticket/Ticket'
import category from './components/data/category'
import data from './components/data/data'
import Nav from './components/nav/Nav'
import Category from './components/category/Category'


function App() {
return (
    <div className="App">
      {/* <div> <Route path="/" component={Nav}/> </div>
        <div className= "category">
          <Route path="/" component={Category}/> 
          {/* <Route exact path="/banks" component={Banks}/> 
          <Route path="/" component={}/> 
          <Route path="/" component={}/> 
          <Route path="/" component={}/> 
          <Route path="/" component={}/>
        </div>    
      <Ticket Ticket={category.data} /> */}

      <CardContainer/>

        {/* <Ticket Ticket={category.data} /> */}
      
      <Category/>
      
    </div>

      


  )
}

export default App;
