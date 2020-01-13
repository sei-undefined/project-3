import React, { Component } from 'react';
import data from '../data/data'


class Category extends Component {
    
    state = {  }
    
    render() { 
       
        return ( 
            <div>
                
                {data.map(data =><div>{data.name}
                <img src={data.image}/></div>)}
        
          
            </div>
         );
    }
}
 
export default Category;