import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import services from './services.css'
class Services extends Component {
    render() {
        
        const id=this.props.match.params.id
        let data = this.props.queuesData
        data = data.find(queue=>queue.id ==id)
        // console.log("this is the services data");
        console.log(this.props)
        
        // console.log(data.services)
        return (
            <Fragment>
                
                <div className="container">
              <div className="card">
                <div className="card-body">
                <h1 className="card-text">Services</h1>
                </div>
                <div ><h4 className="card-text">{data.name}</h4><br/></div>
                <div><img  src={data.image[id]} width="200px"/></div>
                <div className="card-body"><h4 class="card-text" >Services:</h4></div>
                <div>{data.services.map(service=><li>{service}</li>)}</div>
                <button className="btn btn-primary btn-lg active"
                onClick={()=>{
                        this.props.getTicket(id)
                        this.props.history.replace(`/services/${id}/ticket/${id}`)
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
      getTicket: (num)=> dispatch({
        type: "GET_TICKET",
        value: num})
    }
  }

Services = withRouter(Services)
Services = connect(mapStateToProps,mapDispatchToProps)(Services)
export default Services;