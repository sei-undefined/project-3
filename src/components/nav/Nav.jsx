import React from 'react'
import {Link} from 'react-router-dom'
import Category from '../category/Categories'

// import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'
function Nav() {
    return (
        <div className="nav-div">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                 <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item">
                         <NavLink to={`/`} activeClassName="nav-link js-scroll-trigger" ><h1>HOME </h1>  </NavLink> 
                        </li>
                        <li class="nav-item">
                         <NavLink to={`/nearby`} activeClassName="nav-link js-scroll-trigger" > <h1>Nearby </h1> </NavLink>       
                         </li>
                    </ul>
                </div>
                </div>
  </nav>
        
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