import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProduct = (props) => {
    const {title,str,photoUrl,price,_id} = props.product;
    console.log(props.product); 
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" height="200" width="100%" image={photoUrl}  alt="green iguana"/>
                <CardContent sx={{height:{sm:"150px",md:"120px"}}}>
                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">{str.slice(0,150)}</Typography>
                    <Typography sx={{textAlign:"center"}} variant="h6">Price: ৳ {price}</Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/purchase-info/${_id}`}><Button sx={{mx:"auto", my:2}} variant="contained" size="small">Buy Now</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ExploreProduct;