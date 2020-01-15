import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './tickets.css'

class Tickets extends Component {
    state = {  }
    render() { 
        const queues = this.props.queuesData
        let tickets = []
        tickets = tickets.concat(queues.map(q=>q.tickets))
        tickets = tickets.reduce((acc,curr)=>curr.concat(acc))
        console.log(tickets);
        

        return ( 
            <div className="container_t">
                {tickets.map(ticket=>(
                    <Fragment>

                    <div className="tickets">
                        <h4>{ticket.id}</h4>
                        
                        <h4>{ticket.name}</h4>
                        <h4>{ticket.time}</h4>
                    </div>
                    <hr></hr>
                    </Fragment>
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
const mapDispatchToProps = (dispatch) =>{
    return{
      getTicket: (num)=> dispatch({
        type: "GET_TICKET",
        value: num})
    }
}


Tickets = withRouter(Tickets)
Tickets = connect(mapStateToProps,mapDispatchToProps)(Tickets) 
export default Tickets;