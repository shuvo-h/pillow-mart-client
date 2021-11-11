import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import loginBanner from "../../../images/loginBanner.png";
import NavigationBar from '../../Shared/NavBar/NavigationBar/NavigationBar';

const Login = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Grid style={{backgroundColor:"PaleTurquoise", minHeight:`calc(100vh - 64px)`}} sx={{mt:8}} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <LoginForm></LoginForm>
                </Grid>
                <Grid item xs={12} md={6}>
                    
                    <Box> <img src={loginBanner} alt="" /> </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;