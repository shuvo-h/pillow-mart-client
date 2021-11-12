import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [reqAdminInfo,setReqAdminInfo] = useState({}); 
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newReqAdminInfo = {...reqAdminInfo}
        newReqAdminInfo[field] = value;
        setReqAdminInfo(newReqAdminInfo);
    }
    const handleMakeAdmin = e =>{
        fetch(`https://fast-bastion-88806.herokuapp.com/users?existEmail=${reqAdminInfo.reqEmail}`)
            .then(res=>res.json())
            .then(data=>{
                if (data._id) {
                    // call create admin function 
                    createAdmin(data._id,e)
                }
            })
        e.preventDefault();
    }

    const createAdmin = (id,e) =>{
        const updateRole = {role : "admin"};
        fetch(`https://fast-bastion-88806.herokuapp.com/users/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updateRole)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount > 0) {
                alert("Welcome! Admin role given successfully.");
                e.target.reset();
            }
        })
    }
    // console.log(ckeckExistUser("hritik@roshan.com"));
    return (
        <Box sx={{p:2, display:"flex", flexDirection:"column",alignItems:"center"}}>
            <Typography variant="h4" component="div">
                Make an Admin
            </Typography>
            <Typography sx={{my:4}} variant="body1" component="div">
                Input an exist email to give admin authority 
            </Typography>
            <Box  sx={{width:"fit-content"}}>
                <form sx={{display:"flex", flexDirection: 'column' }} onSubmit={handleMakeAdmin}> 
                    <Box ><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="reqEmail" id="standard-basic" label="Exist email to make admin" variant="standard" /></Box>
                    {/* <Box ><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="refEmail" id="standard-basic" label="Re-type your email" variant="standard" /></Box> */}
                    {/* <Box ><TextField sx={{width:"350px"}} onBlur={handleOnBlur} name="refPassword" id="standard-basic" label="Re-type your password" variant="standard" /></Box> */}
                    <Button sx={{m:1}} type="submit" variant="contained">Make Admin</Button>
                </form>
                
            </Box>
            
        </Box>
    );
};

export default MakeAdmin;