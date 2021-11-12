import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from "../../../../hooks/useAuth";
import Order from '../Order/Order';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders,setMyOrders] = useState([]);
    
    useEffect(()=>{
        
            fetch(`https://fast-bastion-88806.herokuapp.com/ordersList?email=${user.email}`)
                .then(res=>res.json())
                .then(data=>setMyOrders(data))
            
        
    },[user.email])

    const handleOrderDelete = (id) =>{
        const confirm = window.confirm("Are you sure to delete this order?");
        
        if (confirm) {
            fetch(`https://fast-bastion-88806.herokuapp.com/orders/${id}`,{
                method:"DELETE"
            })
                .then(res=>res.json())
                .then(data=>{
                    if (data.deletedCount > 0) {
                        alert("Order Deleted Successfully.");
                        const remainingOrders = myOrders.filter(order=>order._id !== id)
                        setMyOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <Box>
            <Typography sx={{textAlign:"center"}} variant="h4">My Order List</Typography>
            <Box>
                {
                    myOrders.map(order=><Order order={order} handleOrderDelete={handleOrderDelete} key={order._id}></Order>)
                }
            </Box>
        </Box>
    );
};

export default MyOrders;