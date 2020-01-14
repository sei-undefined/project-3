import React, { Component } from 'react';
//import data from '../data/data'
//import Ticket from '../ticket/Ticket';
import {Link} from 'react-router-dom'



class Categories extends Component {
    
    state = {  }
    
    render() { 
        
        return ( 
            // <div className="row">
            //     <div className="row">
                <div className="col-xs-4">
                    {/* /categories/:id */}
                    <Link to ={`/categories/${this.props.id}`}>Show</Link>
                    <h1>{this.props.name}</h1>
                <div>
                    <img src={this.props.image} width="100" height="100" />
                    </div>
                    <br/>
                </div>
               
            //     </div>
            // </div>
         );
        }
    }
 
export default Categories;