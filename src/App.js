import React from 'react';
import './App.css';
// import {Route} from 'react-router-dom' 
// import Ticket from './components/ticket/Ticket'
// import category from './components/data/category'


import Nav from './components/nav/Nav'
import CardContainer from './components/category/CardContainer'


// importing QueueCard tag
// import QueueCard from './components/queue_card/QueueCard'
import {Route, Link} from 'react-router-dom' 
import Ticket from './components/ticket/Ticket'
//import category from './components/data/category'
// import data from './components/data/data'
// import Nav from './components/nav/Nav'
// import Categories from './components/category/Categories'
// import Category from   './components/category/category'
//import images from './images'

// import category from './components/data/category'
import Home from "./components/home/Home"
import Services from './components/services/services'
// import Nav from './components/nav/Nav'
// import Category from './components/category/Category'
// import QueueCard from './components/queueCard/QueueCard'
import Nearby from './components/nearby/Nearby'

function App() {
    console.log()
return (
    // Rebuilding the app here
    <div className="App">
        {/* Navbar and Routes */}
        <Route path="/" component={Nav}/>
        <Route path="/" exact component={CardContainer}/>
        <Route path="/services/:id" exact render={()=>(<Services />)} /> 
        <Route path= "/nearby" exact component = {Nearby} />
        <Route path= "/ticket/:id" exact component = {Ticket} />

        {/* <CardContainer/> */}
    </div>
    // <div className="App">
    //     <Route path="/" component={Nav}/>
    //     <Route path="/" exact component={Home}/>
    //     <Route path="/QueueCard/:id" exact component = {QueueCard} /> 
    //     <Route path= "/nearby" exact component = {Nearby} />
    //     {/* ticket  */}

    //     {/* <Ticket Ticket={category.data} /> */}


    //   {/* <div> <Route path="/" component={Nav}/> </div>
    //     <div className= "category">
    //       {/* <Route path="/" component={Category}/>  */}
    //       {/* <Route exact path="/banks" component={Banks}/> 
    //       <Route path="/" component={}/> 
    //       <Route path="/" component={}/> 
    //       <Route path="/" component={}/> 
    //       <Route path="/" component={}/>
    //     </div>    
    //   <Ticket Ticket={category.data} /> */}

    //   <CardContainer/>

    //     {/* <Ticket Ticket={category.data} /> */}
      
    //   {/* <Category/> */}
    //   <Route exact path='/categories/:id' render={(props) => {
    //     const id = props.match.params.id
    //   // let ourdata = data.filter(data => data.id == id)
    //   // return (
    //   // <Category
    //   //   data={data[id]}
    //   //   />
    //   //   )} }/>

    //   <Route exact path='/' render={(props) => (
    //   <div>
    //     {data.map(data => (
    //       <Categories
    //           key={data.id}
    //           name={data.name}
    //           image={data.image}
    //            id={data.id}
    //           crowded={data.crowded}
    //           catagory={data.Category}

    //       />
    //     ))}
    //   </div>
    // )}
    // />
    // </div>

      


        

    //     </div>    
    //   // <Ticket Ticket={category.data} />
)
}

export default App;
