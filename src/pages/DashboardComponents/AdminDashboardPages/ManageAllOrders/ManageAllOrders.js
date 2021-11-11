import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import OrderToken from '../OrderToken/OrderToken';

const ManageAllOrders = () => {
    const [allOrders,setAllOrders] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/orders")
            .then(res=>res.json())
            .then(data=>setAllOrders(data)) 
    },[])

    const handleOrderDelete = (id) =>{
        const confirm = window.confirm("Are you sure to delete this order?");
        
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`,{
                method:"DELETE"
            })
                .then(res=>res.json())
                .then(data=>{
                    if (data.deletedCount > 0) {
                        alert("Order Deleted Successfully.");
                        const remainingOrders = allOrders.filter(order=>order._id !== id)
                        setAllOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <Box sx={{textAlign:"center"}}>
            <Typography variant="h4">Manage All Orders</Typography>
            <Container>
                {
                    allOrders.map(order=><OrderToken order={order} handleOrderDelete={handleOrderDelete} key={order._id}></OrderToken>)
                }
            </Container>
        </Box>
    );
};

export default ManageAllOrders;