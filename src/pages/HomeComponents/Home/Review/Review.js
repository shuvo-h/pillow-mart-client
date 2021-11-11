import { Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = (props) => {
    const {revComment, revDate, revImg, revNamer, revValue} = props.review || {};
    return (
        <Grid container spacing={2} sx={{m:1}} >
                <Grid item xs={6} sm={2}>
                    <img style={{width:"50px", height:"50px",borderRadius:"50%", display:"block", marginLeft:"auto"}} src={revImg} alt="" />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Typography variant="body2"> {revNamer} </Typography>
                        <Typography><Rating  name="simple-controlled" value={revValue} readOnly /></Typography>
                        <Typography variant="body2">{revDate}</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="body2">{revComment}</Typography>
                </Grid>
            </Grid>
    );
};

export default Review;