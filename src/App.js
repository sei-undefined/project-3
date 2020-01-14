import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom' 
import Ticket from './components/ticket/Ticket'
//import category from './components/data/category'
import data from './components/data/data'
import Nav from './components/nav/Nav'
import Categories from './components/category/Categories'
import Category from   './components/category/Category'
//import images from './images'


function App() {
return (
    <div className="App">
      <div> <Route path="/" component={Nav}/> </div>
        <div className= "category">
          {/* <Route path="/" component={Category}/>  */}
          {/* <Route exact path="/banks" component={Banks}/> 
          <Route path="/" component={}/> 
          <Route path="/" component={}/> 
          <Route path="/" component={}/> 
          <Route path="/" component={}/>  */}
        </div>    
        {/* <Ticket Ticket={category.data} /> */}
      
      {/* <Category/> */}
      <Route exact path='/categories/:id' render={(props) => {
        const id = props.match.params.id
      // let ourdata = data.filter(data => data.id == id)
      return (
      <Category
        data={data[id]}
        />
        )} }/>

      <Route exact path='/' render={(props) => (
      <div>
        {data.map(data => (
          <Categories
              key={data.id}
              name={data.name}
              image={data.image}
               id={data.id}
              crowded={data.crowded}
              catagory={data.Category}

          />
        ))}
      </div>
    )}
    />
    </div>
      


  )
}

export default App;
