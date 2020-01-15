import React, { Component } from 'react';
import {connect} from 'react-redux';    
import QueueCard from '../queue_card/QueueCard';

class CardContainer extends Component {

    render() { 
        let queues = this.props.queuesData
        return ( 
            <div>
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