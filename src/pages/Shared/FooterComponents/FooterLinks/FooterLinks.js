import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterLinks = () => {
    return (
        <Grid sx={{px:5}} container spacing={2} >
            <Grid item sm={2} sx={{display:{xs:"none", sm:"block"}}}>
                <Typography sx={{mb:2}} variant="h5">Pillow Mart</Typography>
                <img sx={{width:"100%"}} src="https://i.ibb.co/fphyDhL/logo-pillow-ground.png" alt="" />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography sx={{mb:2, textAlign:"center"}} variant="h5">About Us</Typography>
                <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <NavLink to="/home"  
                        style={({isActive})=>{ return{
                            color: isActive ? "chartreuse":"white", 
                            textDecoration: isActive ? "underline": "none"
                        }}} 
                    >Home</NavLink>
                    <NavLink to="/" 
                        style={({isActive})=>{ return{
                            margin:"6px 0 6px 0",
                            color: isActive ? "chartreuse":"white", 
                            textDecoration: isActive ? "underline": "none"
                        }}} 
                    >Get in touch</NavLink>
                    <NavLink to="/" 
                        style={({isActive})=>{ return{
                                color: isActive ? "chartreuse":"white", 
                                textDecoration: isActive ? "underline": "none"
                            }}} 
                    >FAQs</NavLink>
                </Box>
            </Grid>
            <Grid item sm={3} sx={{display:{xs:"none", sm:"block"}}}>
                <Typography sx={{mb:2, textAlign:"center"}} variant="h5">Product</Typography>
                <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <NavLink to="/"
                        style={({isActive})=>{ return{
                            color: isActive ? "chartreuse":"white", 
                            textDecoration: isActive ? "underline": "none"
                        }}} 
                    >Testimonial</NavLink>
                    <NavLink to="/"
                        style={({isActive})=>{ return{
                            margin:"6px 0 6px 0",
                            color: isActive ? "chartreuse":"white", 
                            textDecoration: isActive ? "underline": "none"
                        }}} 
                    >How it works</NavLink>
                    <NavLink to="/"
                        style={({isActive})=>{ return{
                            color: isActive ? "chartreuse":"white", 
                            textDecoration: isActive ? "underline": "none"
                        }}} 
                    >Member discounts</NavLink>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Typography variant="h5">Join our online forum</Typography>
                <Box>
                    <form>
                        <label>
                            <input style={{padding:"5px 10px", margin:"5px", fontSize:"20px" ,height:"30px", width:"100%",borderRadius:"10px", outline:"none", border:"none"}} type="email" placeholder="email address"></input>
                        </label>
                    </form>
                </Box>
                    <Button sx={{backgroundColor:"Chartreuse", color:"black", fontWeight:"700"}} variant="outlined">Join Forum</Button>
            </Grid>
        </Grid>
    );
};

export default FooterLinks;