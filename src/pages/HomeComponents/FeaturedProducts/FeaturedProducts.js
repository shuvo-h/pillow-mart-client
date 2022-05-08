import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProducts } from '../../../Redux/featiredProductsSlice';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const FeaturedProducts = () => {
    // const [featuredProducts,setFeaturedProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchFeaturedProducts())
        // fetch("https://fast-bastion-88806.herokuapp.com/products")
        //     .then(res=>res.json())
        //     .then(data=>{
        //         const shortedProducts = data.slice(0,6);
        //         setFeaturedProducts(shortedProducts);
        //     }) 
    },[])
    const featuredProducts = useSelector(state =>state.featuredProducts.featuredProducts)
    return (
        <Container sx={{mt:8}}>
            <Typography sx={{py:3, textAlign:"center"}} gutterBottom variant="h4" component="div">
                Featured Products
            </Typography>
            <Grid container spacing={2}>
                {
                    featuredProducts?.map(featuredProduct =><FeaturedProduct featuredProduct={featuredProduct} key={featuredProduct._id}></FeaturedProduct>)
                }
            </Grid>
        </Container>
    );
};

export default FeaturedProducts;