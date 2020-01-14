import React from 'react';
import './App.css';
// import {Route} from 'react-router-dom' 
// import Ticket from './components/ticket/Ticket'
// import category from './components/data/category'


// import Nav from './components/nav/Nav'
import CardContainer from './components/category/CardContainer'


// importing QueueCard tag
// import QueueCard from './components/queue_card/QueueCard'


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

    </div>

      


  )
}

export default App;
