import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Circle
} from "react-google-maps";

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
        >
            <Circle options={props.circleOptions} />
            <Circle
                options={{
                    strokeColor: "#FFFF00",
                    strokeOpacity: 0.8,
                    strokeWeight: 0.35,
                    fillColor: "#FFFF00",
                    fillOpacity: 0.35,
                    center: { lat: 40.73061, lng: -73.935242 },
                    radius: props.circleOptions.radius / 5
                }}
            />
        </GoogleMap>
    ))
);

Map.defaultProps = {
    googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDOOhhv1qEQ3UAT83137FmiMUfJhzGw27U&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
};

export default Map;
