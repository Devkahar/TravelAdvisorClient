import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Box } from '@mui/system';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
const Map = ({coordinates,setCoordinates,setBounds,places}) => {
    return (
        <div style={{height: '85vh',width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDAM0upneeZP9IdiuX-_IOqU4KOv5lDJ4Y'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={10}
                margin={[50, 50, 50, 50]}
                onChange={e=>{
                    console.log("Hey ");
                    setCoordinates({lat: e.center.lat,lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
            >
            {places?.map((place,i)=>(
                <div 
                    style={{position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }}}
                    lat={place.latitude}
                    lng={place.longitude}
                    key={i}
                >
                    <Paper elevation={3} 
                        sx={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}
                    >
                        <Typography variant="subtitle2" xs={{fontSize:"12px"}} gutterBottom>
                            {place?.name}
                        </Typography>
                        <img style={{cursor:'pointer'}} 
                        style={{maxWidth: '50px'}}
                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                        alt={place.name}
                        />
                    </Paper>
                    
                </div>
            ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map
