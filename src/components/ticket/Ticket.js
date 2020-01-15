import React, { Component } from 'react';
//import category from './data/category'
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import category from '../data/category'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Ticket extends Component {
    state = {  }
    render() { 
        // finding id
        // console.log("render it")
        const id=this.props.match.params.id
        let data = this.props.queuesData
        // console.log(data)
        data = data.find(queue=>queue.id ==id)

        
        
        const dateToFormat = '2020-01-19T12:59-0500';
            
 
        
    //    let  allCatogry=this.props.Ticket;
        return (
        <div className="container">   
            <div id="accordion" role="tablist">
                <div className="card">
                    <div className="card-header">
                        <h2>E-Ticket:</h2>
                        <h2>{`You are ${data.tickets}`}</h2>
                        <Moment locale="de">{dateToFormat}</Moment>
                    </div>
                    <div className="card-body">
                        <p className="card-title">{data.name}</p>
                        {/* <button className="btn btn-primary" onClick={() => this.props.delete(this.props.object.id)}>Delete{this.props.id}</button></div></div> */}
                    </div>
                </div>
            </div>
        </div>
        );
        // componentDidMount(){

        // }
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


Ticket = withRouter(Ticket)
Ticket = connect(mapStateToProps,mapDispatchToProps)(Ticket) 
export default Ticket;