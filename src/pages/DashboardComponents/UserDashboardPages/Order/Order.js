import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const orderStyle = {
    my:1, 
    backgroundColor:"AliceBlue",
    "&:hover":{
        backgroundColor:"LightGray",  
    }
}
const cancelBtnStyle = {
    color:"black",
    fontWeight:"600",
    backgroundColor:"LightSalmon",
    marginBottom:"15px",
    '&:hover': {
        color:"white",
        backgroundColor:"Red",
  }
}
const orderImgStyle = {
    maxHeight:{xs:"60px",sm:"100px"},
    maxWidth:{xs:"60px",sm:"100px"},
}

const Order = (props) => {
    const {customerAddress,customerName,customerPhone,productName, quantity, productId, _id} = props.order;
    const [orderedProduct,setOrderedProduct] = useState({});
    const {photoUrl,price, size, size_metric, Fabric, color} = orderedProduct;
    
    useEffect(()=>{
        fetch(`https://fast-bastion-88806.herokuapp.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setOrderedProduct(data))
    },[productId])

    

    return (
        <Grid sx={orderStyle} Grid container spacing={2} >
            <Grid item xs={6} sm={3} sx={{display:{xs:"none", sm:"block"}}}>
                <Box sx={orderImgStyle}>
                    <img style={{height:"100%", width:"100%"}} src={photoUrl} alt="" />
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography variant="body1">{productName}</Typography>
                <Typography variant="body1">Price: ৳{price}</Typography>
                <Typography variant="body1">Quantity: {quantity} piece</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography variant="body1">Name: {customerName}</Typography>
                <Typography variant="body1">Address: {customerAddress}</Typography>
                <Typography variant="body1">Contact Number:: {customerPhone}</Typography>
                
            </Grid>
            <Grid item xs={12} sm={3}>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}><Button sx={cancelBtnStyle} onClick={()=>props.handleOrderDelete(_id)} variant="outlined">Cancel Order</Button></Box>
            </Grid>
        </Grid>
    );
};

export default Order;