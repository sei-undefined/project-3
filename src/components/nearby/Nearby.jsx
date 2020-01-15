//npm install --save react-google-maps
// import {withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// import React, { Component } from 'react'

// class Nearby extends Component {
//     render() { 
//         return ( 
//             <withGoogleMap>
//             <GoogleMap
//                 defaultZoom={8}
//                 defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//                 <Marker position={{ lat: -34.397, lng: 150.644 }} />
//             </GoogleMap>
//             </withGoogleMap>
//         );
//     }
// }
import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Nearby = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
)) 


export default Nearby;