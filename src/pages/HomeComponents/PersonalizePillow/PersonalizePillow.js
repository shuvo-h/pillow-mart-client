import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PersonalizePillow = () => {
    return (
        <Box sx={{p:4,textAlign:"center", backgroundColor:"PaleTurquoise"}}>
            <Typography sx={{fontSize:{xs:"20px", md:"30px"},fontWeight:"500"}}>
                PERSONALIZE YOUR PILLOW NOW
            </Typography>
            <Typography>
                We accept custom design provided by our customers only for <br />
            </Typography>
            <Typography sx={{fontSize:{xs:"30px", md:"40px"},fontWeight:"900", color:"blue"}}>
                ৳ 100
            </Typography>
            <Typography>
                So why will you be late? Contact with us soon.
            </Typography>
            <Button sx={{my:2}} variant="contained">Personalize Now</Button> <br />
            <NavLink to=""><Button variant="outlined">Click here to gift a pillow!</Button></NavLink>
        </Box>
    );
};

export default PersonalizePillow;