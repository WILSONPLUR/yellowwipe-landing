import React from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs, compose } from "react-google-maps";

const GoogleMapComponent = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    )
}))

export default GoogleMapComponent;