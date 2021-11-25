import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Avatar, Divider, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
const UserPage = () => {
    const data = localStorage.getItem('userInfo');
    const [userData,setuserData] = useState();
    useEffect(()=>{
        if(data){
            setuserData(JSON.parse(data));
        }
    },[data]);
    return (
    <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#6dd5ed',
                    alignItems: 'center',
                    height: '90vh',
                    width: '100vw',
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    height: '80vh',
                    width: '80vw',
                }}>
                    <Grid container spacing={2} >
                        <Grid item xs={4}>
                            <Box variant="div" sx={{p: 4}}>
                            <Avatar  alt="Remy Sharp" src={userData?.pic} style ={{ height: '300px', width: '300px'}} />
                            </Box>
                                {/* <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }}
                                    >
                                    <Divider component="li" />
                                    <li>
                                        <Typography
                                        sx={{ mt: 0.5, ml: 2 }}
                                        color="text.secondary"
                                        display="block"
                                        variant="caption"
                                        >               
                                        </Typography>
                                    </li>
                                    <Box>
                                    {/* <ListItem  sx = {{width : '150px'}}>
                                        <Grid>
                                            <Grid item xs ={4}>
                                            <ListItemText primary="Work history"/>
                                            </Grid>
                                            <Grid item xs = {15}>
                                                <Typography color="text.secondary" variant="body2">
                                                    Great programmer with literally 0 skills and no experience in engineering.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <Divider component="li" />
                                    <li>
                                        <Typography
                                        sx={{ mt: 0.5, ml: 2 }}
                                        color="text.secondary"
                                        display="block"
                                        variant="caption"
                                        >               
                                        </Typography>
                                    </li>
                                    <ListItem  sx = {{width : '150px'}}>
                                        <Grid>
                                            <Grid item xs = {3}>
                                                <ListItemText primary="Wish List"/>
                                            </Grid>
                                            <Grid item xs = {15}>
                                                <Typography color="text.secondary" variant="body2">                                                
                                                    Great programmer with literally 0 skills and no experience in engineering.
                                                </Typography>                     
                                            </Grid>
                                        </Grid>
                                    </ListItem> */}
                                {/* </Box>
                                <Divider component="li"/>  
                            </List>  */}
                            
                        </Grid> 
                        <Grid item xs={6}>
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                }}
                                >
                                <ListItem>
                                    
                                    <Typography gutterBottom variant="h3" component="div">
                                        {userData?.name} 
                                    </Typography>
                                </ListItem><ListItem>
                                    <Typography gutterBottom variant="h6" component="div" sx = {{color: 'red'}}>
                                        Occupation: Works at IBM as Senior project manager
                                    </Typography>
                                </ListItem>
                                <Divider component="li"/>
                                <ListItem  sx = {{width : '150px'}}>
                                    <ListItemText primary="About"/>
                                    <Typography color="text.secondary" variant="body2">
                                        I want to visit as many places I can before my endgame.
                                    </Typography>
                                </ListItem>
                                <Divider component="li" />
                                <li>
                                    <Typography
                                    sx={{ mt: 0.5, ml: 2 }}
                                    color="text.secondary"
                                    display="block"
                                    variant="caption"
                                    >               
                                    </Typography>
                                </li>
                                <ListItem>
                                    <ContactPageIcon/>
                                    <ListItemText primary="Contact"/>
                                    <Typography color="text.secondary" variant="body2">
                                        
                                        <li>Email: {userData?.email} </li>
                                       
                                        
                                    </Typography>
                                </ListItem>
                                <Divider component="li"/>
                                <li>
                                    <Typography
                                    sx={{ mt: 0.5, ml: 9 }}
                                    color="text.secondary"
                                    display="block"
                                    variant="caption"
                                    >
                                    </Typography>
                                </li>
                                {/* <ListItem>
                                    <InfoIcon/>
                                    <ListItemText primary="Basic Information"/>
                                    <Typography color="text.secondary" variant="body2">
                                        <li>Birth Date: </li>
                                        <li>Gender:</li>                                                                   
                                    </Typography>
                                </ListItem> */}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
        </Box>
    </>
    )
}

export default UserPage
