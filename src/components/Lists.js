
import Card from './ItemCard';
import React, { createRef, useEffect, useState } from 'react'
import { Box } from '@mui/system';
import Map from "./Map";
import Grid from '@mui/material/Grid';
import { getPlacesData } from '../helper/index';
import Loading from './Loading';
import { Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';

const Lists = () => {
    const [elRefs, setElRefs] = useState([]);
    const [bounds, setBounds] = useState(null);
    const [places, setPlaces] = useState([]);
    const [type, setType] = useState('attractions');
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState('');
    const [name,setName] = useState('');
    const [childClicked, setChildClicked] = useState(null);
    const dispatch = useDispatch();
    const placeName = useSelector(state => state.placeName);
    useEffect(() => {
        setName(placeName);
    },[placeName]);
    useEffect(() => {
        if (bounds) {
            setLoading(true);
            getPlacesData(bounds.sw, bounds.ne, type)
                .then(data => {
                    console.log("[ Places Data ] ", data);
                    setPlaces(data?.filter((place) => place.name && place.photo && place.num_reviews > 0));
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err.message);
                    setLoading(false);
                })
        }
    }, [bounds, type]);
    useEffect(() => {
        if(places){
            setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
        }
        
    }, [places]);
    useEffect(() => {
        const data = places?.filter(place => Number(place.rating) >= rating);
        setPlaces(data);
    }, [rating]);
    return (
        <>
            <Container>
                <Typography variant="h3" style={{marginTop: '50px'}}>Welcome to {name}, Start Exploring</Typography>
                <Box variant="div" sx={{ display: 'flex', mt: 4, }}>
                    <FormControl sx={{ minWidth: 120, mr: '40px' }}>
                        <InputLabel id="type">Explore</InputLabel>
                        <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="attractions">Attraction</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="rating">Rating</InputLabel>
                        <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="3">Above 3.0</MenuItem>
                            <MenuItem value="4">Above 4.0</MenuItem>
                            <MenuItem value="4.5">Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box variant="div" sx={{ zindex: '1' }}>
                    {loading === true ? <Loading /> :
                        places &&
                        <Box mt={5}>
                            <Grid container spacing={2}>
                                {places?.map((place, i) => (
                                    <Grid ref={elRefs[i]} key={place.location_id} item md={4} xs={12}>
                                        <Card
                                            place={place}
                                            type={type}
                                            selected={Number(childClicked) === i} refProp={elRefs[i]} place={place}
                                        />
                                    </Grid>
                                
                            ))}
                            </Grid>
                        </Box>
                    }
                </Box>
            </Container>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Map setChildClicked={setChildClicked} setBounds={setBounds} places={places} />
                </Grid>
            </Grid>
        </>
    )
}

export default Lists;