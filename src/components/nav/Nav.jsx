import React from 'react'
import {Link} from 'react-router-dom'
import Category from '../category/Categories'

import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'
function Nav() {
    return (
        <div className="nav-div">
           <NavLink to={`/`} activeClassName="chosen" ><h1>HOME </h1>  </NavLink> 
           <NavLink to={`/nearby`} activeClassName="chosen" > <h1>Nearby </h1> </NavLink>       
            <hr />
        
            {/* <Link to="/My-qs"> <nav className="Nav navbar navbar-light bg-light"> 
            <span className="navbar-brand mb-0 h1">My Ques </span>
            </nav></Link>
            <Link to="/Nearby-q"><nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Nearby Ques</span>
            </nav></Link>
            <Link to="/find-q"><nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Find Ques</span>
            </nav></Link>
            <Link to="/my-ticket"><nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">My Tickets</span>
            </nav></Link> */}
      </div>
    ) 
}
export default Nav