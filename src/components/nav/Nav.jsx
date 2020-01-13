import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Category from '../category/Category'

function Nav() {
    return (
        <div className="nav-div">
            <Link to="/My-qs"> <nav className="Nav navbar navbar-light bg-light"> 
            <span className="navbar-brand mb-0 h1">My Ques </span>
            </nav></Link>
            <Link to="/Nearby-q"><nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Nearby Ques</span>
            </nav></Link>
            <Link to="/find-q"><nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Find Ques</span>
            </nav></Link>
            <Link to="/my-ticket"><nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">My Ticket</span>
            </nav></Link>
           
      </div>
    ) 
}
export default Nav