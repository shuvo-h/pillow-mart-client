import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useFirebase";


const PurchaseForm = (props) => {
    const {user} = useAuth();
    const [orderInfo,setOrderInfo] = useState({});
    const navigate = useNavigate();
    const handleOnBlur= e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = {...orderInfo};
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);
    }
    const handleOrder = e =>{
        orderInfo.productId = props.productId;
        orderInfo.productName = props.title;
        orderInfo.customerName = user.displayName;
        orderInfo.customerEmail = user.email;
        orderInfo.orderDate = (new Date()).toLocaleDateString();
        orderInfo.status = "Pending";
        //send the data to database
        //wait here to get response from database with the submitted id
        fetch("https://fast-bastion-88806.herokuapp.com/orders",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    navigate(`/shipping/${data.insertedId}`)
                }
            })


        e.preventDefault();
    }
    
    return (
        <Box sx={{p:2, display:"flex", flexDirection:"column",alignItems:"center"}}>
            <Typography sx={{my:2}} variant="h4" component="div">
                Fill Up the Form To Place Order
            </Typography>
            {
                props.title && <Box sx={{p:2, borderRadius:"10px", width:"fit-content", boxShadow:"2px 2px 10px 1px Magenta",  backgroundColor:"Lavender"}}>
                    <form sx={{display:"flex", flexDirection: 'column' }} onSubmit={handleOrder}> 
                        <Box sx={{my:1}}><TextField sx={{width:"350px"}} type="text" name="productName" id="productName" label="Ordered Product" variant="standard" value={props.title} focused/></Box>
                        <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} type="number" name="quantity" id="quantity" label="Quantity" variant="standard" /></Box>
                        <Box sx={{my:1}}><TextField sx={{width:"350px"}}  type="text" name="customerName" value={user.displayName} id="rname" label="Recipient's Name" variant="standard" focused/></Box>
                        <Box sx={{my:1}}><TextField sx={{width:"350px"}}  type="text" name="customerEmail" value={user.email} id="email" label="Email" variant="standard" focused/></Box>
                        <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} type="text" name="customerAddress" id="address" label="Address" variant="standard" /></Box>
                        <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} type="number" name="customerPhone" id="phone-number" label="Phone Number" variant="standard" /></Box>
                        <Button type="submit" variant="contained">Order Now</Button>
                    </form>
                </Box>
            }
        </Box>
    );
};

export default PurchaseForm;