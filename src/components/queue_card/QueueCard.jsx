import React, { Component } from 'react';
import {connect} from 'react-redux'

class QueueCard extends Component {

    render() { 
        let queues = this.props.queuesData
        return ( 
            <div>
                {queues.map(queue => <h1>{queue.name}</h1>)}
            </div>
         );
    }
}

const mapStateToProps = (state) =>{
    return{
        queuesData: state.queuesData
    }
  }
  
//   const mapDispatchToProps = (dispatch) =>{
//     return{
//       addOne: ()=> dispatch({type: "INC_COUNTER"})
//     }
//   }
QueueCard = connect(mapStateToProps)(QueueCard)
export default QueueCard