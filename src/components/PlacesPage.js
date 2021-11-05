import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import {getPlacesDetails} from '../helper/index'
import Loading from './Loading'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
const PlacesPage = (props) => {
    const [loading,setLoading] = useState(true);
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [images,setImages] = useState('');
    const [description,setDescription] = useState('');
    const [ranking,setRanking] = useState('');
    const [subType,setSubType] = useState([]);
    useEffect(async ()=>{
        try {
            const data = await getPlacesDetails(props.match.params.id);
            setLoading(true);
            if(data){
                console.log(data);
                setLoading(false);
                setName(data.name);
                setAddress(data.address);
                setImages(data.photo.images.original.url);
                setDescription(data.description);
                setRanking(data.ranking);
                setSubType(data.subtype);
            }
        } catch (error) {
            setLoading(false);
            console.log();
        }
        
    },[]);
    return (
        <Container>
            {loading==true?<Loading/>:(
                <>
                <Typography variant="h2" sx={{mt: 4}}>
                    {name}
                </Typography>
                <Box
                    component="div"
                    sx={{display: 'flex', alignItems: 'center',fontSize: 16}}
                >
                    <Typography variant="p" sx={{mr: 2}}>
                        {ranking}
                    </Typography>
                    {subType?.map(e =>(
                        <>
                        <FiberManualRecordRoundedIcon sx={{fontSize: 10 , mr: 0.5}}/>
                        <Typography variant="p" sx={{mr: 2}}>
                            {e.name}
                        </Typography>
                        </>
                    ))}
                </Box>

                <Box
                    component="div"
                    sx={{display: 'flex', alignItems: 'center',fontSize: 16}}
                >
                    <Typography variant="p" sx={{mr: 2}}>
                        {ranking}
                    </Typography>
                    {subType?.map(e =>(
                        <>
                        <FiberManualRecordRoundedIcon sx={{fontSize: 10 , mr: 0.5}}/>
                        <Typography variant="p" sx={{mr: 2}}>
                            {e.name}
                        </Typography>
                        </>
                    ))}
                </Box>

                <Box>
                    
                </Box>
                
                <Grid container spacing={2} sx={{mt:3}}>
                    <Grid item md={7} xs={12}>
                        <Box  
                            component="img"
                            sx={{
                            height: 400,
                            display: 'block',
                            maxWidth: 700,
                            overflow: 'hidden',
                            width: '100%',
                            border: 15,
                            borderColor: "#b3b3b3",
                            }}
                            src={images}
                            
                        /> 
                    </Grid>
                    <Grid item md={5} xs={12}>
                        {description ? <Box variant="div" sx={{mb: 2}}>
                            <Typography variant="h4" sx={{mb: 3,justifyContent: 'left'}}>
                                Description
                            </Typography>
                            <Typography variant="p" sx={{fontSize: 16}}>
                                {description}
                            </Typography>
                        </Box>: <p>Add Description</p>}
                        <Box variant="dix" >
                            <Button variant="contained" color="primary" sx={{mr: 5}}>Mark Visied</Button>
                            <Button variant="contained" sx={{backgroundColor: "#ff0f67", '&:hover':{backgroundColor: "#ff0f67"}}}>Add To Bucket</Button>
                        </Box>
                    </Grid>

                </Grid>
                {/* Awards */}
                </>
            )}
        </Container>
       
    )
}

export default PlacesPage;
