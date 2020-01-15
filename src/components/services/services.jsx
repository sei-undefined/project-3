import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import services from './services.css'
import axios from 'axios'
class Services extends Component {
    render() {
        
        const id=this.props.match.params.id
        let data = this.props.queuesData
        data = data.find(queue=>queue.id ==id)
        // console.log("this is the services data");
        // console.log(this.props)
        
        // console.log(data.services)
        return (
            <Fragment>
                
                <div className="container">
              <div className="card">
                <div className="card-body">
                <h1 className="card-text">{data.name}</h1>
                </div>
                {/* <div ><h4 className="card-text">{data.name}</h4><br/></div> */}
                <div><img  src={data.image[id]} width="200px"/></div>
                <div className="card-body"><h4 className="card-text" >Services:</h4></div>
                <div style={{padding:"20px"}}>{data.services.map((service,idx)=><li key={idx}>{service}</li>)}</div>
                <button className="btn btn-primary btn-lg active"
                onClick={()=>{
                        let url = "http://worldtimeapi.org/api/ip"
                        axios.get(url)
                        .then((res)=> {
                            // handle success
                            const datetime = res.data.datetime
                            this.props.getTicket(id,datetime)
                            // console.log(res.data)
                            return res.data
                        })
                        .then((res)=>{
                            // console.log(res);
                            
                            this.props.history.replace(`/services/${id}/ticket/${id}`)

                        })
                        .catch((error)=> {
                            // handle error
                            console.log(error)
                        })
                    }}>
                   
                    
                   Get Ticket
                </button>
                
            </div>
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
        getTicket: (id,time)=> dispatch({
        type: "GET_TICKET",
        value: id,
        time: time})

        // setTime: (id, time)=> dispatch({
        //     type: "SET_TIME",
        //     timevalue: time,
        //     idvalue: id
        // })
    }
  }

Services = withRouter(Services)
Services = connect(mapStateToProps,mapDispatchToProps)(Services)
export default Services;