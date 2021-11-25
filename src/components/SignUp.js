import { Button, Card, Container, TextField, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import Message from './Message'
import { useHistory } from 'react-router';
import ImageIcon from '@mui/icons-material/Image';
const Input = styled('input')({
    display: 'none',
});

const SignUp = () => {
    const [userName, setuserName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const history = useHistory();
    const [fileData, setfileData] = useState(null);
    useEffect(() => {
        const data = localStorage.getItem('userInfo');
        if (data) {
            history.push('/');
        }
    }, [])
    const resetHandler = () => {
        setemail('');
        setpassword('');
        setuserName('');
    }
    const uploadHandler = (e) => {
        let file = e.target.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append('image', file);
        setfileData(formData);
    }
    const loginHandler = (e) => {
        e.preventDefault();
        seterror(null);

        if (email !== '' && password !== '' && userName !== '' && fileData) {
            axios.post('/api/uploadImage/',
                fileData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
            }
            )
            .then(data => {
                console.log(data);
                axios.post('/api/user/signup',{
                    name: userName,
                    email: email,
                    password: password,
                    pic: data.data.filename,
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

            })
            
        }
    }

    return (
        <Container>
            {error && <Message message={error} query="error" />}
            <Box variant="div" sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card sx={{ width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #eee', p: 3, }}>
                    <div>
                        <Typography variant="h3" sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up <LoginIcon fontSize="45px" /></Typography>
                        <TextField value={userName} onChange={e => setuserName(e.target.value)} type="text" label="name" variant="outlined" sx={{ mb: 5, width: '300px' }} />
                        <br />
                        <TextField value={email} onChange={e => setemail(e.target.value)} type="email" label="email" variant="outlined" sx={{ mb: 5, width: '300px' }} />
                        <br />
                        <TextField value={password} onChange={e => setpassword(e.target.value)} type="password" label="Password" variant="outlined" sx={{ mb: 5, width: '300px' }} />
                        <br />
                        <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
                            <Typography variant="h6" sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Upload Image <LoginIcon fontSize="45px" /></Typography>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple="multiple" type="file" onChange={uploadHandler} />
                                <Button variant="contained" component="span">
                                    <ImageIcon /> Upload
                                </Button>
                            </label>
                        </Box>
                        <br />
                        <Button variant="contained" sx={{ marginRight: '15px' }} onClick={loginHandler}>Submit</Button> <Button variant="contained" onClick={resetHandler}>Reset</Button>
                    </div>
                </Card>
            </Box>
        </Container>

    )
}

export default SignUp;
