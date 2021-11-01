import { Grid } from '@mui/material';
import Card from './ItemCard';
import React from 'react'
import { Box } from '@mui/system';

const Lists = ({places}) => {
    var x = 1;
    return (
        <Box mt={5}>
            
            <Grid container spacing={2}>
                {places?.map(place =>(
                    <>

                    {place.photo&& (<Grid item md={4} xs={12}>
                        <Card 
                            name={place.name}
                            address={place.address}
                            rating={place.rating}
                            image={place.photo?.images.original}
                            ranking={place.subcategory_ranking}
                        />
                    </Grid>)}
                    </>
                ))}
            </Grid>
        </Box>
    )
}

export default Lists;