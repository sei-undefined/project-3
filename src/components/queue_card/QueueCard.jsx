import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'

class QueueCard extends Component {

    render() { 
        let queue = this.props
        console.log(queue)
        return (
            <Fragment>
                
                <div>
                    <h1>{queue.name}</h1>
                    <h4>{queue.catagory}</h4>
                    <div>{queue.count}</div>
                    <button onClick={()=>this.props.getTicket(queue.id)}>get ticket</button>
                    <hr></hr>
                </div>
                
            </Fragment>
         );
    }
}

const mapStateToProps = (state) =>{
    return{
        queuesData: state.queuesData
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return{
      getTicket: (num)=> dispatch({
        type: "GET_TICKET",
        value: num})
    }
  }
QueueCard = connect(mapStateToProps, mapDispatchToProps)(QueueCard)
export default QueueCard