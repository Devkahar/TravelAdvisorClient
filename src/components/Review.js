import { Button, FormControl, Rating, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import { useHistory } from 'react-router';
import { styled } from '@mui/material/styles';
import { ImageList, ImageListItem } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import Message from './Message'
import UserProfile from './UserProfile';
const Input = styled('input')({
    display: 'none',
  });

const Review = ({locationID,type}) => {
    const [addReview,setAddReview] = useState(false);
    const [reviewBody,setReviewBody] = useState('');
    const [fileData,setfileData] = useState(null);
    const [rating,setrating] = useState(0);
    const [userData,setuserData] = useState(null);
    const [ratingData,setRatingData] = useState([]);
    const [loading,setLoading] = useState(false);
    const user = localStorage.getItem('userInfo');
    const [error,setError] = useState(null);
    const [message,setMessage] = useState(null);
    const history = useHistory();
    console.log(locationID);

    useEffect(() => {
        axios.post(`/api/place/reviews/`,{placeID : locationID,type: type},{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            setRatingData(res.data.review);
            console.log(res.data.review);
        })
    },[message]);
    useEffect(()=>{
        if(user){
            setuserData(JSON.parse(user));
            console.log(userData);
        }
    },[user]);
    const uploadHandler = (e) =>{
        let file = e.target.files;
        console.log(file);
        const formData = new FormData();
        for (const [key, value] of Object.entries(file)) {
            formData.append('image',value);
        }
        setfileData(formData);
    }
    const reviewSubmitHandler = (e) =>{
        e.preventDefault();
        setLoading(true);
        axios.post('/api/uploadImages/',
            fileData,{headers: {
                'Content-Type': 'multipart/form-data',
            }}
        )
        .then(res=>{
           
            const data = res.data;
            console.log(data);
              axios.post('/api/addReview/',{
                  images: data,
                  body : reviewBody,
                  rating: rating,
                  locationID: locationID,
                  type: type,
              },{
                  headers:{
                'Authorization': `Bearer ${userData.token}`,
            }})
            .then(res=>{
                console.log(res.data);
                setLoading(false);
                setMessage('Upload Sucessful');
            })
            .catch(err =>{
                console.log(err);
                setLoading(false);
                setError(err.message);
            })
        })
        .catch(err=>{
            setLoading(false);
            console.log(err);
            setError(err.message);
        })
        // console.log("Submit");
    }
    const addReviewHandler = () =>{
        if(user){
            setAddReview(!addReview);
        }else{
            history.push('/signup');
        }
    }
    return (
        <Box sx={{mt: 3}}>
            {error||message && <Message message={error||message} query={error?'error':'success'}/>}
            <Typography variant="h3" sx={{mb: 2}}>
                Reviews
            </Typography>
            <Button variant="contained" color="success" sx={{mb: 2}} onClick={addReviewHandler}>Add Review <AddCircleIcon/> </Button>
            {addReview && (
                <Box variant="div" sx={{mb:5,display: 'block' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Write Review"
                            multiline
                            rows={4}
                            value={reviewBody}
                            onChange={e => setReviewBody(e.target.value)}
                            placeholder="Start Writing You're Experience"
                            sx={{minWidth: '500px',mt: 3}}
                        />
                        <br/>
                        <Typography variant="h5" sx={{mt: 2}}>Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                            setrating(newValue);
                            }}
                        />
                        <br/>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple="multiple" type="file" onChange={uploadHandler}/>
                                <Button sx={{mt: '22px'}} variant="contained" component="span">
                                <ImageIcon/> Upload
                                </Button>
                            </label>
                            <Button disabled={loading} variant="contained"  sx={{mt: 3,ml:2, backgroundColor: '#ff0f67'}} onClick={reviewSubmitHandler}>Submit {loading&& <CircularProgress/> }</Button>
                        </Box>
                 </Box>
            )}
            {ratingData?.map(e =>(
                <>
                <Box sx={{border: '1px solid #eee',mb: 5,p:3}}>
                    <UserProfile name={e.user.name} pic={e.user.pic}/>
                    <Typography variant="p" style={{display: 'block',fontSize: '20px'}}>{e.body}</Typography>
                    <Typography component="legend">Rating</Typography>
                    <Rating name="read-only" value={e.rating} readOnly />

                    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={350}>
                        {e.images.map((item,i) => (
                            <ImageListItem key={item}>
                                {console.log(item)}
                            <img
                                src={item+'?w=161&fit=crop&auto=format'}
                                alt={'item'}
                                srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                loading="lazy"
                                style={{height:'100%',width:'100%'}}
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                
                </>
            ))}
        </Box>
    )
}

export default Review
