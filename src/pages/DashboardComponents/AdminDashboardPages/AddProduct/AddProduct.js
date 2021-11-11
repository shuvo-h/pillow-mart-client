import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box } from '@mui/system';

const AddProduct = () => {
    const [newProduct,setNewProduct] = useState({});
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newProductInfo = {...newProduct}
        newProductInfo[field] = value;
        setNewProduct(newProductInfo);
    }
    
    const handleRegistration = e =>{
        console.log(newProduct);
        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("New product added Successfully!")
                }
            })

        e.preventDefault();
    }
    return (
        <Box sx={{p:2, display:"flex", flexDirection:"column",alignItems:"center"}}>
            <Typography sx={{my:2}} variant="h4" component="div">
                Create an Account
            </Typography>
            <Box sx={{p:2, borderRadius:"10px", width:"fit-content", boxShadow:"2px 2px 10px 1px Magenta", backgroundColor:"Lavender"}}>
                <form sx={{display:"flex", flexDirection: 'column' }} onSubmit={handleRegistration}> 
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="title" type="text" id="title" label="Product Name" variant="standard" required/></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="price" type="number" id="price" label="Price in Tk." variant="standard" required /></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="color"  type="text" id="color" label="Color" variant="standard" required /></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="size" type="text" id="size" label="Size (height x width)" variant="standard" required/></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="size_metric" type="text" id="size_metric" label="Size Metric (cm/inches)" variant="standard" required/></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="pattern" type="text" id="pattern" label="Pattern" variant="standard" required/></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="Fabric" type="text" id="Fabric" label="Fabric Type" variant="standard" required/></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="shape" type="text" id="shape" label="Shape" variant="standard" required/></Box>
                    <Box sx={{my:1}}><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="photoUrl" type="text" id="photoUrl" label="Image url" variant="standard" required/></Box>
                    <Box sx={{my:1}}><TextareaAutosize style={{width:"100%", backgroundColor:"Lavender", fontSize:"18px"}} onBlur={handleOnBlur} name="str" type="text" id="str" label="Description" variant="standard" placeholder="Product description" minRows={4} required/></Box>
                    <Button sx={{my:3}} type="submit" variant="contained">Create an account</Button>
                </form>
            </Box>
        </Box>
    );
};

export default AddProduct;