import { Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavigationBar from '../../Shared/NavBar/NavigationBar/NavigationBar';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PurchaseForm from '../PurchaseForm/PurchaseForm';

const PurchaseInfo = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const {Fabric, color, pattern, photoUrl, price, shape, size, size_metric, str, title, _id } = product;
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[id])
    return (
        <>
            <NavigationBar></NavigationBar>
            <Container sx={{mt:8}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img width="100%" src={photoUrl} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h3>{title}</h3>
                        <List>
                            <ListItem><BeenhereIcon sx={{mr:2}} color="primary" />Fabric: {Fabric}</ListItem>
                            <ListItem><BeenhereIcon sx={{mr:2}} color="primary" />Color: {color}</ListItem>
                            <ListItem><BeenhereIcon sx={{mr:2}} color="primary" />Pattern: {pattern}</ListItem>
                            <ListItem><BeenhereIcon sx={{mr:2}} color="primary" />Price: ৳{price}</ListItem>
                            <ListItem><BeenhereIcon sx={{mr:2}} color="primary" />Shape: {shape}</ListItem>
                            <ListItem><BeenhereIcon sx={{mr:2}} color="primary" />size: {size} {size_metric}</ListItem>
                            <Typography variant="h4">Description:</Typography>
                            <Typography variant="body1">{str}</Typography>
                        </List>
                    </Grid>
                </Grid>
                <PurchaseForm title={title} productId={_id}></PurchaseForm>
            </Container>
        </>
    );
};

export default PurchaseInfo;