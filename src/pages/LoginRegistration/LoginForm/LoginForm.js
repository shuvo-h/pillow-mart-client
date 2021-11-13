import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useAuth from "../../../hooks/useAuth";

const LoginForm = () => {
    const {loginExistUser, signInWithGoogle, error} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let locationFrom = location.state?.from?.pathname || "/home";
    const [existUser,setExistUser] = useState({}); 
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const existUserInfo = {...existUser}
        existUserInfo[field] = value;
        setExistUser(existUserInfo);
    }

    const handleLogin = e =>{
        loginExistUser(existUser.email,existUser.password,navigate,locationFrom);
        e.preventDefault();
    }
    return (
        <Box sx={{p:2, display:"flex", flexDirection:"column",alignItems:"center", textAlign:"center"}}>
            <Typography variant="h4" component="div">
                Welcome Back 
            </Typography>
            <Typography variant="body1" component="div">
                To keep connected with us please login with your email/username and password
            </Typography>
            <Box  sx={{mt:3, width:"fit-content"}}>
                <form sx={{display:"flex", flexDirection: 'column' }} onSubmit={handleLogin}> 
                    <Box><TextField sx={{width:{xs:"250px",sm:"350px"}}} onBlur={handleOnBlur} name="email" type="email" id="standard-basic" label="Email" variant="standard" required/></Box>
                    <Box><TextField sx={{width:{xs:"250px",sm:"350px"}}} onBlur={handleOnBlur} name="password" type="password" id="standard-basic" label="Password" variant="standard" required /></Box>
                    <Typography color="red">{error}</Typography>
                    <Button sx={{display:"block", margin:"10px auto"}} type="submit" variant="contained">Login</Button>
                </form>
                <Typography variant="body2" component="div">
                    Don't have an account?
                </Typography>
                <NavLink to="/registration">Register here</NavLink>
            </Box>
            <Box sx={{mt:4}}>
                <Typography variant="h4" component="div">
                    OR 
                </Typography>
                <Typography variant="body1" component="div">
                    You can join with
                </Typography>
                <Box
                    sx={{ display: 'flex', flexDirection:"column" ,justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper',}}
                >
                    <Button sx={{mx:1, my:1}} onClick={()=>signInWithGoogle(navigate,locationFrom)} variant="outlined"><GoogleIcon style={{color:"Goldenrod"}} sx={{mr:3}} fontSize={"large"} />Continue with Google </Button>
                    <Button sx={{mx:1}} variant="outlined"><FacebookIcon sx={{mr:3}} fontSize={"large"} />Continue with Facebook</Button>
                    <Button sx={{mx:1}} variant="outlined"><TwitterIcon sx={{mr:3}} style={{color:"DarkTurquoise"}} fontSize={"large"} />Continue with Twitter</Button>
                    <Button sx={{mx:1}} variant="outlined"><LinkedInIcon sx={{mr:3}} fontSize={"large"} />Continue with Linkdin</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginForm;