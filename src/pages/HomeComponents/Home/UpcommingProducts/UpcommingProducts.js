import { Container, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import UpcommingProduct from "../UpcommingProduct/UpcommingProduct";

const UpcommingProducts = () => {
    const [upcommingProducts,setUpcommingProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/upcommingProducts")
            .then(res=>res.json())
            .then(data=>setUpcommingProducts(data))

    },[])
    return (
        <Box  sx={{mt:5, py:5, backgroundColor:"AliceBlue"}}>
        <Container>
                <Typography sx={{pb:3,textAlign:"center"}} variant="h4">Upcomming Products</Typography>
            <Grid container spacing={2}>
                {
                    upcommingProducts.map(upcommingProduct=><UpcommingProduct upcommingProduct={upcommingProduct} key={upcommingProduct._id}></UpcommingProduct>)
                }
            </Grid>
        </Container>
        </Box>
    );
};

export default UpcommingProducts;