import { Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = (props) => {
    const {revComment, revDate, revImg, revNamer, revValue} = props.review || {};
    return (
        <Grid container spacing={2} sx={{m:{sm:1},my:{xs:1}}} >
                <Grid item xs={3} sm={2}>
                    <Box sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-end"}}}>
                        <img style={{width:"50px", height:"50px",borderRadius:"50%"}} src={revImg} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={9} sm={2}>
                    <Typography variant="body2"> {revNamer} </Typography>
                        <Typography sx={{display:"flex",alignItems:"center"}}><Rating name="half-rating-read" defaultValue={revValue} precision={0.2} readOnly />({revValue})</Typography>
                        <Typography variant="body2">{revDate}</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography sx={{}} variant="body2">{revComment}</Typography>
                </Grid>
            </Grid>
    );
};

export default Review;