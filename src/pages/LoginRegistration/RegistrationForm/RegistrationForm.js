import { TextField, Typography, Button } from '@mui/material';
import { Box,  } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const RegistrationForm = () => {
    const {registerNewUser, setError, error} = useAuth();
    const [newUser,setNewUser] = useState({});
    const navigate = useNavigate();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = {...newUser}
        newUserInfo[field] = value;
        setNewUser(newUserInfo);
    }
    
    const handleRegistration = e =>{
        setError("")
        if (newUser.password === newUser.confirmPassword) {
            registerNewUser(newUser.email, newUser.password, newUser.name,newUser.imgUrl, newUser.phoneNumber,navigate,newUser)
        }else if (newUser.password !== newUser.confirmPassword) {
            setError("Password didn,t match.")
        }
        e.preventDefault();
    }
    return (
        <Box sx={{p:2, display:"flex", flexDirection:"column",alignItems:"center"}}>
            <Typography sx={{my:2}} variant="h4" component="div">
                Create an Account
            </Typography>
            <Box sx={{p:2, borderRadius:"10px", width:"fit-content", boxShadow:"2px 2px 10px 1px Magenta", backgroundColor:"Lavender"}}>
                <form sx={{display:"flex", flexDirection: 'column' }} onSubmit={handleRegistration}> 
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="name" type="text" id="name" label="Full Name" variant="standard" /></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="email" type="text" id="email" label="Email" variant="standard" /></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="password"  type="password" id="password" label="Password" variant="standard" /></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="confirmPassword" type="password" id="confirm-password" label="Confirm Password" variant="standard" /></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="phoneNumber" type="number" id="phone-number" label="Phone Number" variant="standard" /></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="imgUrl" type="text" id="photourl" label="Photo URL" variant="standard" /></Box>
                    <Button sx={{my:3}} type="submit" variant="contained">Create an account</Button>
                </form>
                <Typography variant="body2" component="div">
                    { error && <p style={{color:"red"}}>{error}</p> }
                </Typography>
                <Typography variant="body2" component="div">
                    Already have an account? <NavLink to="/Login">Login here</NavLink>
                </Typography>
            </Box>
        </Box>
    );
};

export default RegistrationForm;