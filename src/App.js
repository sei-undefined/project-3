import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom' 
import Nav from './components/nav/Nav'
import Category from './components/category/Category'
function App() {
  return (
    <div className="App">
     <div> <Route path="/" component={Nav}/> </div>
      <div className= "category">
        <Route path="/" component={Category}/> 
        {/* <Route exact path="/banks" component={Banks}/> 
        <Route path="/" component={}/> 
        <Route path="/" component={}/> 
        <Route path="/" component={}/> 
        <Route path="/" component={}/>  */}
      </div>      
    </div>
  ); //link to
}

export default App;
