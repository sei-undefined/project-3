import React, { Component } from 'react';
import {connect} from 'react-redux';

class Test extends Component {
    state = {  }
    render() { 
        console.log("this is test comp");
        console.log(this.props);
        
        
        return ( 
            <div>
                <h1>This is test comp</h1>
                
            </div>
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

Test=connect(mapStateToProps,mapDispatchToProps)(Test)
export default Test;