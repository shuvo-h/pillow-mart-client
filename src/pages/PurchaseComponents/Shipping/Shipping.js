import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavigationBar from '../../Shared/NavBar/NavigationBar/NavigationBar';

const Shipping = () => {
    const {orderId} = useParams();
    const [orderInfo,setOrderInfo] = useState({});
    const [orderedProductInfo,setOrderedProductInfo] = useState({});
    const {customerAddress, customerEmail, customerName,customerPhone,quantity, productId } = orderInfo || {};
    const { color, photoUrl,price,title} = orderedProductInfo || {};
    
    useEffect(()=>{
        fetch(`https://fast-bastion-88806.herokuapp.com/orders/${orderId}`)
            .then(res=>res.json())
            .then(data=>{
                if (data._id) {
                    setOrderInfo(data)
                }
            })
    },[orderId])

    useEffect(()=>{
        fetch(`https://fast-bastion-88806.herokuapp.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setOrderedProductInfo(data))
    },[productId])

    return (
        <Box sx={{mt:8, textAlign:"center"}}>
            <NavigationBar></NavigationBar>
                <Typography sx={{pt:4,fontWeight:700}} variant="h5">
                    We are Processing your shipment:
                </Typography>
                <Container>
                    <Box>
                        <img src={photoUrl} alt="" />
                    </Box>
                    <Typography variant="h4">
                        Shipping Information:
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            Name: {customerName}, <br />
                            Email: {customerEmail} <br />
                            Contact Number: {customerPhone} <br />
                            Shipping Address: {customerAddress}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Product Name: {title} <br />
                            color: {color} <br />
                            Quantity: {quantity} <br />
                            price: {price} 
                        </Grid>
                    </Grid>
                </Container>
        </Box>
    );
};

export default Shipping;