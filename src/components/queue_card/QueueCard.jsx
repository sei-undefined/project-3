import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom';


class QueueCard extends Component {

    render() { 
        let queue = this.props
        // console.log("this is the que card props")
        // console.log(queue);
        
        // console.log(queue.image[0])
        // let image = require("../../images/the_cheesecake_factory.png")
        // let image = require(queue.image)
        return (
            <Fragment>
                
                <div>
                    <h1>{queue.name}</h1>
                    <img src={queue.image[queue.id]} alt="" style={{ width: "30%" }}/>
                    <h4>{queue.catagory}</h4>
                    {/* <div>{queue.count}</div> */}
                    {/* <button onClick={()=>this.props.getTicket(queue.id)}>get ticket</button> */}
                    <br></br>
                    <Link to={`/services/${queue.id}`} key={queue.id} id={queue.id}>Services</Link>
                    <hr></hr>
                </div>
                
            </Fragment>
         );
    }
}

const mapStateToProps = (state) =>{
    return{
        queuesData: state.queuesData,
        tickets: state.tickets
    }
}
  
  const mapDispatchToProps = (dispatch) =>{
    return{
      getTicket: (num)=> dispatch({
        type: "GET_TICKET",
        value: num})
    }
  }
QueueCard = withRouter(QueueCard)
QueueCard = connect(mapStateToProps, mapDispatchToProps)(QueueCard)
export default QueueCard