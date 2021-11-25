import { Autocomplete } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react'
import useStyles from './HeaderStyle'
import { AppBar, Toolbar, Typography, InputBase, Box, Avatar, Button, CardMedia } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from 'react-router'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import UserProfile from './UserProfile';
import logo from '../asset/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { coordsAction, placeNameAction, placesNameAction } from '../actions/action';

const Header = () => {
    const dispatch = useDispatch();
    const coords = useSelector((state) => state.coordinates);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const classes = useStyles();
    const [userPresent,setuserPresent] = useState(false);
    const [autocomplete,setAutocomplete] = useState(true);
    const history = useHistory();
    useEffect(()=>{
        // 34.0522342 -118.2436849
        navigator.geolocation.getCurrentPosition( e => {
          dispatch(coordsAction(JSON.parse(localStorage.getItem('coords'))));
          console.log(coords);
        });
    },[]);
    useEffect(()=>{
        if(userInfo){
            setuserPresent(true);
        }else{
            setuserPresent(false);
        }
    },[userInfo]);
    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        console.log(autocomplete.getPlace());
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        dispatch(placeNameAction(autocomplete.getPlace().name));
        dispatch(coordsAction({ lat, lng }));
        localStorage.setItem('coords', JSON.stringify({lat,lng}));
    };
    return (
    <AppBar position="static" >
      <Toolbar className={classes.toolbar}>
        
            <Box sx={{height: '70px'}}>
                <img style={{height: '100%'}} src={logo}  alt="Travel Advisor Logo"/>
            </Box>

            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                </div>
          </Autocomplete>
        <Box display="flex" sx={{justifyContent: 'center',alignItems: 'center'}}>
            {/* If Not logged In */}
            {userPresent?<>
                <Box 
                sx={{cursor: 'pointer'}}
                onClick={()=> {
                    history.push('/userpage');
                }}>
                    <UserProfile name={userInfo.name} pic={userInfo.pic}/>
                </Box>
                
                <Button onClick={()=>{
                    localStorage.clear();
                    setuserPresent(false);
                }} variant="contained">Sign Out</Button>
            </>:
            <>
                <Link to="/login" className={classes.navLink}>Log In</Link>
                <Link to="/signup" className={classes.navLink}>Sign Up</Link>
            </>
            }
        </Box>
      </Toolbar>
    </AppBar>
    )
}

export default Header;