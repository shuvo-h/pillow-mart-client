import { Container, Typography } from '@mui/material';
import React from 'react';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import useAuth from '../../../hooks/useAuth';


const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <Container sx={{textAlign:"center"}}>
            <Typography sx={{my:2,color:"Blue"}} variant="h3">
                Hey {user.displayName}!
            </Typography>
            <Typography variant="h6">
                You are on you dashboard! 
            </Typography>
            <Typography  variant="h6">
                Please, Manage your task carefully. Here, Some changes may not recoverable. 
            </Typography>
            <DeveloperBoardIcon sx={{mt:4,fontSize:"250px", color:"YellowGreen"}} />
        </Container>
    );
};

export default DashboardHome;