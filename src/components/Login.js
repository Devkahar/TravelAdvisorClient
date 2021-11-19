import { Button, Card, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import Message from './Message'
import { useHistory } from 'react-router';

const Login = () => {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [error,seterror] = useState('');
    const history = useHistory();
    useEffect(() => {
        const data = localStorage.getItem('userInfo');
        if(data){
            history.push('/');
        }
    },[])
    const loginHandler = (e) => {
        e.preventDefault();
        seterror(null);
        if(email!=='' && password!==''){
            axios.post('/api/user/login',{
                email: email,
                password: password,
            },{
                headers: {
                    contentType: 'application/json',
                }
            })
            .then(res =>{
                localStorage.setItem('userInfo',JSON.stringify(res.data));
                // console.log(res);
                history.push('/');
            })
            .catch(err =>{
                console.log(err.response.data.message);
                seterror(err.response.data.message);
            })
        }else{
        }
    }
    const resetHandler = () => {
        setemail('');
        setpassword('');
    }
    
    return (
        <Container>
            {error && <Message message={error} query="error"/>}
            <Box variant="div" sx={{height: '80vh', display: 'flex',alignItems:'center',justifyContent: 'center'}}>
                <Card sx={{ width: '500px', display: 'flex',alignItems:'center',justifyContent: 'center', border: '2px solid #eee',p: 3,}}>
                    <div>
                    <Typography  variant="h3" sx={{mb: 2,display:'flex', justifyContent: 'center',alignItems: 'center'}} >LOGIN <LoginIcon fontSize="45px"/></Typography>
                    <TextField value={email} onChange={e => setemail(e.target.value)} type="email" label="email" variant="outlined" sx={{mb: 5,width: '300px'}} />
                    <br/>
                    <TextField value={password} onChange={e => setpassword(e.target.value)} type="password" label="Password" variant="outlined" sx={{mb: 5,width: '300px'}} />
                    <br/>
                    <Button variant="contained" sx={{marginRight: '15px'} } onClick={loginHandler}>Submit</Button> <Button variant="contained" onClick={resetHandler}>Reset</Button>
                    </div>
                </Card>
            </Box>
        </Container>
    
    )
}

export default Login
