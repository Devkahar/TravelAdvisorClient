import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import {getPlacesDetails} from '../helper/index'
import Loading from './Loading'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import LaunchIcon from '@mui/icons-material/Launch';
import DescriptionIcon from '@mui/icons-material/Description';
import Review from './Review';
import axios from 'axios';

const PlacesPage = (props) => {
    const [loading,setLoading] = useState(true);
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [images,setImages] = useState('');
    const [description,setDescription] = useState('');
    const [ranking,setRanking] = useState('');
    const [subType,setSubType] = useState([]);
    const [isClosed,setIsClosed] = useState(false);
    const [webUrl,setWebUrl] = useState('');
    const [userData,setUserData] = useState(null);
    const [email,setEmail] = useState('');
    useEffect(async ()=>{
        try {
            setUserData(JSON.parse(localStorage.getItem('userInfo')));
            console.log(userData);
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
                setIsClosed(data.is_closed)
                setWebUrl(data.website?data.website:data.web_url);
                setEmail(data.email);
            }
        } catch (error) {
            setLoading(false);
            console.log();
        }
        
    },[]);
    const addToBucketHandler = ()=>{
        console.log('clicked');
        axios.post('/api/user/bucket/',{
            placeID : props.match.params.id,
            type : props.match.params.type,
        }, {
            headers:{
            'Authorization': `Bearer ${userData.token}`,
        }})
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
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
                {/* ----------- */}
                <Box
                    component="div"
                    sx={{display: 'flex', alignItems: 'center',fontSize: 16}}
                >
                    <Typography variant="p" sx={{mr: 2}}>
                        {isClosed ? 'Closed' : 'Open'}
                    </Typography>

                    <FiberManualRecordRoundedIcon sx={{fontSize: 10 , mr: 0.5}}/>
                    <Typography variant="p" sx={{mr: 2}}>
                        <Link target="_blank" href={`${webUrl}`} sx={{display: 'flex',pt: "4px" }}>WebSite <LaunchIcon/></Link>
                    </Typography>
                    <FiberManualRecordRoundedIcon sx={{fontSize: 10 , mr: 0.5}}/>
                    <Typography variant="p" sx={{mr: 2}}>
                        <Link href={`${email}`}>Email</Link>
                    </Typography>
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
                        <Box variant="div" sx={{mb: 2}}>
                            <Typography variant="h4" sx={{mb: 3,justifyContent: 'left'}}>
                                Description <DescriptionIcon/>
                            </Typography>
                            <Typography variant="p" sx={{fontSize: 16,lineHeight: '20px',letterSpacing: '0.5px'}}>
                                {description? `${description}` : 'Good Place to visit Have really Nice Reviews'}
                            </Typography>
                        </Box> 
                        <Box variant="div" >
                            <Button  onClick={addToBucketHandler} variant="contained" sx={{backgroundColor: "#ff0f67", '&:hover':{backgroundColor: "#ff0f67"}}}>Add To Bucket</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Review locationID ={props.match.params.id} type={props.match.params.type} />
                </>
            )}
        </Container>
       
    )
}

export default PlacesPage;