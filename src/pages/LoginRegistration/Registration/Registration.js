import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import bannerbgRegistration from '../../../images/registration-bg.png';
import NavigationBar from '../../Shared/NavBar/NavigationBar/NavigationBar';

const Registration = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Grid style={{backgroundColor:"PaleTurquoise", minHeight:`calc(100vh - 64px)`}} sx={{mt:8}} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <RegistrationForm></RegistrationForm>
                </Grid>
                <Grid item xs={12} md={6}>
                    
                    <Box> <img src={bannerbgRegistration} alt="" /> </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Registration;