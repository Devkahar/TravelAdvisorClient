import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Box } from '@mui/system';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import mapStyles from './mapStyle';
import useStyles from './style.js';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {coordsAction} from '../actions/action';
import { getPlacesData } from '../helper';
const Map = ({setBounds,places,setChildClicked}) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    const dispatch = useDispatch();
    const coords = useSelector((state) => state.coordinates);
    return (
        <div style={{ height: '65vh',width: '90%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDAM0upneeZP9IdiuX-_IOqU4KOv5lDJ4Y'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={10}
                margin={[50, 50, 50, 50]}
                onChange={e=>{
                    dispatch(coordsAction({lat: e.center.lat,lng: e.center.lng}))
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                    dispatch(coordsAction({lat: e.center.lat}));
                    console.log(coords," ",{ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
            {places?.map((place,i)=>(
                <div 
                className={classes.markerContainer}
                    lat={place.latitude}
                    lng={place.longitude}
                    key={i}
                >
                {!matches
                    ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                    : (
                        <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                        <img
                            className={classes.pointer}
                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                        />
                        <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                    )}
                    
                </div>
            ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map
