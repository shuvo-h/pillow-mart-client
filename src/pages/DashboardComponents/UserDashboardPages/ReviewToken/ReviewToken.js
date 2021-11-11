import { Button, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const ReviewToken = (props) => {
    const {revComment, revDate, revValue, _id} = props.review;
    
    
    return (
        <Grid sx={{my:2}} container spacing={2}>
            <Grid item sm={6} md={2}>
                <Typography sx={{display:"flex"}} >
                    <Rating name="read-only" value={revValue} readOnly /> ({revValue})
                </Typography>
            </Grid>
            <Grid item sm={6} md={2}>
                <Typography>
                    {revDate}
                </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
                {revComment}
            </Grid>
            <Grid item sm={12} md={2}>
                <Button sx={{margin:"auto",display:"block"}} onClick={()=>props.handleReviewDelete(_id)} variant="contained">Delete</Button>
            </Grid>
        </Grid>
    );
};

export default ReviewToken;