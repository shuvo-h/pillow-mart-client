import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ProductToken = (props) => {
    const {photoUrl, title, price, size, size_metric, _id} = props.product;


    return (
        <Grid sx={{my:1,backgroundColor:"LightCyan"}} container spacing={2}>
            <Grid item xs={12} >
                {title}
            </Grid>
            <Grid item sm={4} md={3}>
                <Box sx={{width:{xs:"70px",sm:"100px"}, height:"100px"}}>
                <img style={{width:"100%", height:"100%"}} src={photoUrl} alt="" />
                </Box>
            </Grid>
            <Grid item sm={4} md={3}>
                {price}
            </Grid>
            <Grid item sm={4} md={4}>
                {size} {size_metric}
            </Grid>
            <Grid item sm={12} md={2}>
                <Button sx={{display:"block", margin:"auto"}} onClick={()=>props.handleReviewDelete(_id)} variant="contained">Delete</Button>
            </Grid>
        </Grid>
    );
};

export default ProductToken;