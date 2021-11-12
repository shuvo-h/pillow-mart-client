import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const OrderToken = (props) => {
    const [productInfo,setProductInfo] = useState({});
    const {customerAddress, customerEmail, customerName, customerPhone, productId, productName, quantity, orderDate,status, _id} = props.order || {};
    const {photoUrl, price, size, size_metric} = productInfo || {};
    
    
    useEffect(()=>{
        if (productId) {
            fetch(`https://fast-bastion-88806.herokuapp.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setProductInfo(data))
        }
    },[productId])

    const handleDelivery = (id) =>{
        const updateStatus = {status : "Delivered"};
        fetch(`https://fast-bastion-88806.herokuapp.com/orders/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updateStatus)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount > 0) {
                alert("Product is delivered successfully!");
                window.location.reload();
            }
        })
    }

    return (
        <Grid sx={{my:1,backgroundColor:"LightCyan"}} container spacing={2}>
            <Grid item xs={12} md={2}>
                <Typography>Name: {customerName}</Typography>
                <Typography>Email: {customerEmail}</Typography>
                <Typography>Phone: {customerPhone}</Typography>
                <Typography> {customerAddress}</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography>Product name: {productName}</Typography>
                <Typography>Quantity: {quantity}</Typography>
                <Typography>Order Date: {orderDate}</Typography>
                <Typography>Product Price: {price}</Typography>
                <Typography>Size: {size} {size_metric}</Typography>

                
            </Grid>
            <Grid item xs={12} md={2}>
                <Box sx={{width:"100px", height:"100px"}}>
                    <img style={{width:"100%", height:"100%"}} src={photoUrl} alt="" />
                    Status: {status}
                </Box>
            </Grid>
            <Grid item xs={12} md={2}>
                {
                    status === "Pending" ?
                        <Button sx={{backgroundColor:"Gold"}} onClick={()=>handleDelivery(_id)} variant="outlined">Confirm shipping</Button>
                    : <Button sx={{cursor:"not-allowed", backgroundColor:"SpringGreen"}} variant="outlined">Delivered</Button>
                }
                <Button sx={{mt:2,backgroundColor:"Tomato", }} onClick={()=>props.handleOrderDelete(_id)} variant="outlined">Cancel Order</Button>
            </Grid>
        </Grid>
    );
};

export default OrderToken;