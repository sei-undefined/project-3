import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom' 
import Nav from './components/nav'
function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav}/>
      
    </div>
  );
}

export default App;
