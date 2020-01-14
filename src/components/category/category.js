
import React, { Component } from 'react';

class Category extends Component {
    state = {  }
    render() { 
        console.log(this.props.data)
        return ( <div>
            <h2>{this.props.data.name}</h2>
           <div> <img src={this.props.data.image} width="200" height="200"/></div>

             <div><h4>Services:{this.props.data.services}</h4></div>

            <button>get your que</button>
        </div> );
    }
}
 
export default Category;