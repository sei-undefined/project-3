import React, { Component } from 'react';
import {connect} from 'react-redux';    
import QueueCard from '../queue_card/QueueCard';
import './CardContainer.css'
class CardContainer extends Component {
//style={{marginRight: spacing + 'em'}}
    render() { 
        let queues = this.props.queuesData
        return ( 
            <div className='container'>
                {/* {console.log("this is CardContainer props")} */}
                {/* {console.log(this.props)} */}
                {queues.map(queue => (
                <QueueCard 
                key={queue.id}
                id={queue.id}
                name={queue.name}
                category={queue.category}
                count={queue.count}
                image={queue.image}
                />
                ))}
            </div>
         );
    }
}

const mapStateToProps = (state) =>{
    return{
        queuesData: state.queuesData
    }
}

CardContainer = connect(mapStateToProps)(CardContainer)
export default CardContainer;