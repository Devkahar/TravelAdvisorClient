import React from 'react'
import GoogleMapReact from 'google-map-react';
const Map = ({coordinates,setCoordinates,setBounds}) => {
    return (
        <div style={{height: '85vh',width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDAM0upneeZP9IdiuX-_IOqU4KOv5lDJ4Y'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={10}
                onChange={e=>{
                    console.log("Hey ");
                    setCoordinates({lat: e.center.lat,lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map
