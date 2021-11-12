import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const FeaturedProducts = () => {
    const [featuredProducts,setFeaturedProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/products")
            .then(res=>res.json())
            .then(data=>{
                const shortedProducts = data.slice(0,6);
                setFeaturedProducts(shortedProducts);
            }) 
    },[])
    return (
        <Container sx={{mt:8}}>
            <Typography sx={{py:3, textAlign:"center"}} gutterBottom variant="h4" component="div">
                Featured Products
            </Typography>
            <Grid container spacing={2}>
                {
                    featuredProducts.map(featuredProduct =><FeaturedProduct featuredProduct={featuredProduct} key={featuredProduct._id}></FeaturedProduct>)
                }
            </Grid>
        </Container>
    );
};

export default FeaturedProducts;