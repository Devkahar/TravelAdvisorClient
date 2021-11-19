import { Avatar, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react'



const UserProfile = ({name,url}) => {
    return (
        <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between', mr: 3}}>
            <Avatar  alt={name} src="https://www.skodalive.co.in/Dealer_Reviews/images/user.jpg"  />
            <Box variant="p" sx={{ml: 1, fontSize:'18px'}}>{name}</Box>
        </Box>
    )
}

export default UserProfile
