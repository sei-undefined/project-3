import React, { Component } from 'react';

import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import category from '../data/category'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import images from "../../images/images";
import Ticketcss from './Ticket.css'
class Ticket extends Component {
    state = {  }
    // componentDidMount(){
    //     url= "http://worldtimeapi.org/api/ip"
    //     axios.get(url)
    //     .then((res)=> {
    //     // handle success
    //     res.datetime
    //     })
    //     .catch((error)=> {
    //     // handle error
    //     console.log(error)
    //     })
    // }
    render() { 
        // finding id
        // console.log("render it")
        const id=this.props.match.params.id
        let data = this.props.queuesData
        // console.log(data)
        data = data.find(queue=>queue.id ==id)

        
        
        const dateToFormat = '2020-01-19T12:59-0500';
            

        // console.log("this is tickets props")
        // console.log(this.props)

        // tickets array data
        const tData = data.tickets[data.count-1]
        let time = tData.time.split("T")
        const splitAt = index => x => [x.slice(0, index), x.slice(index)]
        time[1]= splitAt(5)(time[1])[0]
        console.log(time);
        
        // console.log("this is tData")
        // console.log(tData);
        
 
        
    //    let  allCatogry=this.props.Ticket;
        
        return (
        <div className="container">   
            <div id="accordion" role="tablist">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">{data.name}</h1>
                        {/* <h2>{`You are ${data.tickets}`}</h2> */}
                        
                        
                        {/* <button className="btn btn-primary" onClick={() => this.props.delete(this.props.object.id)}>Delete{this.props.id}</button></div></div> */}
                    </div>
                    <div className="card-header headert">
                        <h4>date:{time[0]}</h4>
                        <h4>time:{time[1]}</h4>

                        {/* <Moment locale="de">{dateToFormat}</Moment> */}
                        <h2>{`You are customer number:`}</h2>
                        <h1>{tData.turn}</h1>
                        
                    </div>
                   
                     
                              </div>
                              <img className="hourglass"
                              src={images[11]} alt="hour" width="200px"/>
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