import { Grid } from '@mui/material';
import Card from './ItemCard';
import React from 'react'
import { Box } from '@mui/system';

const Lists = ({places,rating}) => {
    return (
        <Box mt={5}>
            
            <Grid container spacing={2}>
                {places?.map(place =>(
                    <>
                    {(place.photo && Number(place.rating)>=rating)&& (<Grid item md={4} xs={12} key={place.location_id}>
                        <Card 
                            place={place}
                        />
                    </Grid>)}
                    </>
                ))}
            </Grid>
        </Box>
    )
}

export default Lists;