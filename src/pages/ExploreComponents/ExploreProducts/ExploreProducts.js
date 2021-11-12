import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationBar from "../../Shared/NavBar/NavigationBar/NavigationBar";
import ExploreProduct from '../ExploreProduct/ExploreProduct';

const ExploreProducts = () => {
    const [allProducts,setAllProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fast-bastion-88806.herokuapp.com/products")
            .then(res=>res.json())
            .then(data=>setAllProducts(data)) 
    },[])
    return (
        <>
            <NavigationBar></NavigationBar>
            <Container sx={{mt:8}}>
                <Typography sx={{py:3}} gutterBottom variant="h4" component="div">
                    All Pillows
                </Typography>
                <Grid container spacing={2}>
                    {
                        allProducts.map(product =><ExploreProduct product={product} key={product._id}></ExploreProduct>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default ExploreProducts;