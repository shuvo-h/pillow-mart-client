import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typical from 'react-typical'

const Banner = () => {
    return (
        <Box sx={{mt:8, pt:8, backgroundColor:"PaleTurquoise"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} sx={{display:{xs:"none", sm:"block"}}}>
                    <img width="100%" height="100%" src="https://i.ibb.co/vx5pQRG/banner-1.png" alt="" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography sx={{fontSize:{xs:"20px", md:"30px"},color:"navy",fontWeight:"700", textAlign:"center",lineHeight:1}} gutterBottom component="div">
                        Welcome To PillowMart
                    </Typography>
                    <Typography sx={{fontSize:{xs:"20px", md:"30px"},fontWeight:"700", textAlign:"center",lineHeight:1}} gutterBottom component="div">
                        Your Comfort is Our business
                    </Typography>
                    <Typography sx={{fontSize:{xs:"20px", md:"30px"}, textAlign:"center", mt:{xs:3, md:8}}} component="div">
                     We ensure: <br />
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[' Resonable price', 2000, ' Customer satisfaction', 2000, " Qualityful products", 2000]}
                        />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img width="100%" height="100%" src="https://i.ibb.co/z21DNvY/banner-2.png" alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;