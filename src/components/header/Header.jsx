import React, { Component } from 'react'

import "./Header.css"
import {NavLink} from 'react-router-dom'

class Header extends Component {
    render() { 
        return ( 
            <div className="header" >
                <div className="nav-div-links">
                    <NavLink className="nav-link" to={`/`} activeClassName="chosen" ><h1 className="Navs">HOME </h1>  </NavLink>
                    <NavLink className="nav-link" to={`/tickets`} activeClassName="chosen" > <h1 className="Navs">Tickets </h1> </NavLink>
                    <NavLink className="nav-link" to={`/nearby`} activeClassName="chosen" > <h1 className="Navs">Nearby </h1> </NavLink>
                </div>
        
               <img className ="image" src="https://images.pexels.com/photos/4481/lunch-germany-kiosk-line.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"  />
            </div>
         );
    }
}
 
export default Header ;