import React, { Component } from 'react';
import data from '../data/data'
import QueueCard from '../queueCard/QueueCard';
import {Link} from 'react-router-dom'
import "./Home.css"
class Home extends Component {
    state = {  }
    render() {

        return ( 
            <div className="home" style="top:20%"> 
                {/* all cards */}
              {data.map(queue=> {
              return ( 

              <Link to ={ `/QueueCard/:id`}>
                <QueueCard
                key = {queue.id}
                id = {queue.id}
                name = {queue.name}>
                    {/* {queue.name} */}
                </QueueCard>
              </Link> 
             )})}  


            </div>
         );
    }
}
 
export default Home;