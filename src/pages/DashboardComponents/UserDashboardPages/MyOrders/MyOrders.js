import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from "../../../../hooks/useAuth";
import Order from '../Order/Order';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders,setMyOrders] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?userEmail=${user.email}`)
            .then(res=>res.json())
            .then(data=>setMyOrders(data))
    },[user.email])
    return (
        <Box>
            <Typography sx={{textAlign:"center"}} variant="h4">My Order List</Typography>
            <Box>
                {
                    myOrders.map(order=><Order order={order} key={order._id}></Order>)
                }
            </Box>
        </Box>
    );
};

export default MyOrders;