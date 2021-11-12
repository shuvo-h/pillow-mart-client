import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ProductToken from '../ProductToken/ProductToken';

const ManageProducts = () => {
    const [allProducts,setAllProducts] = useState([]);
    
    useEffect(()=>{
        fetch("https://fast-bastion-88806.herokuapp.com/products")
            .then(res=>res.json())
            .then(data=>setAllProducts(data)) 
    },[])

    
    const handleReviewDelete = (id) =>{
        const confirm = window.confirm("Are you sure to delete this review?");
        
        if (confirm) {
            fetch(`https://fast-bastion-88806.herokuapp.com/products/${id}`,{
                method:"DELETE"
            })
                .then(res=>res.json())
                .then(data=>{
                    if (data.deletedCount > 0) {
                        alert("Product Deleted Successfully.");
                        const remainingProducts = allProducts.filter(product=>product._id !== id)
                        setAllProducts(remainingProducts);
                    }
                })
        }
    }

    return (
        <Box sx={{textAlign:"center"}}>
            <Typography variant="h4">Manage All Products</Typography>
            <Container>
                {
                    allProducts.map(product=><ProductToken product={product} handleReviewDelete={handleReviewDelete} key={product._id}></ProductToken>)
                }
            </Container>
        </Box>
    );
};

export default ManageProducts;