import { Grid } from '@mui/material';
import Card from './ItemCard';
import React, { createRef, useEffect, useState } from 'react'
import { Box } from '@mui/system';

const Lists = ({places,rating,type,childClicked}) => {
    const [elRefs, setElRefs] = useState([]);
    console.log("ChildClicked",childClicked);
    useEffect(() => {
        setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);
    return (
        <Box mt={5}>
            <Grid container spacing={2}>
                {places?.map((place,i) =>(
                    <>
                    {(place.photo && Number(place.rating)>=rating)&& (<Grid ref={elRefs[i]} key={i} item md={4} xs={12} key={place.location_id}>
                        <Card 
                            place={place}
                            type={type}
                            selected={Number(childClicked) === i} refProp={elRefs[i]} place={place}
                        />
                    </Grid>)}
                    </>
                ))}
            </Grid>
        </Box>
    )
}

export default Lists;