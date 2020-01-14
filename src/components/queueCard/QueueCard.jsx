import React, { Component, Fragment } from 'react';

class QueueCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className ="q-card-container">
            <Fragment>
                <h1>{this.props.name}</h1>
                <h2>id number is : {this.props.id}</h2>
            </Fragment>
            </div>
         );
    }
}
 
export default QueueCard;