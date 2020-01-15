//npm install --save react-google-maps
// import {withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './Nearby.css'
import React, { Component, Fragment } from 'react'

class Nearby extends Component {
    render() { 
        return ( 
            <div className="container_n">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=alfaisal&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                </div>
            </div>
            </div>

        );
    }
}


// import React from 'react'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const Nearby = withScriptjs(withGoogleMap((props) =>
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//         {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//     </GoogleMap>
// )) 


export default Nearby;