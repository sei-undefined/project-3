import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'

class QueueCard extends Component {

    render() { 
        let queue = this.props
        // console.log(queue.image[0])
        // let image = require("../../images/the_cheesecake_factory.png")
        // let image = require(queue.image)
        return (
            <Fragment>
                
                <div>
                    <h1>{queue.name}</h1>
                    <img src={queue.image[queue.id]} alt=""/>
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