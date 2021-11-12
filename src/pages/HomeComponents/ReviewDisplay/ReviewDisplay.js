import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Home/Review/Review';

const ReviewDisplay = () => {
    const [reviews,setReviews] = useState([]);
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
            .then(res=>res.json())
            .then(data=>setReviews(data.reverse()))
    },[])
    return (
        <Box sx={{py:2,backgroundColor:"Gainsboro"}}>
                <Typography sx={{py:5,textAlign:"center"}} variant="h4">Customer's Review</Typography>
            <Container>
                {
                    reviews.map(review=><Review review={review} key={review._id}></Review>)
                }
            </Container>
        </Box>
    );
};

export default ReviewDisplay;