import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom' 
import Ticket from './components/ticket/Ticket'
import category from './components/data/category'
import Nav from './components/nav'
function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav}/>
      <Ticket Ticket={category.data} />
      
    </div>
  );
}

export default App;
