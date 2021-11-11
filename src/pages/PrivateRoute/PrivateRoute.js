import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    const location = useLocation();
    console.log(isLoading, user);
    if (isLoading) {
        return (
            <Box sx={{ mt:12,display: 'flex', justifyContent:"center"}}>
                <CircularProgress />
            </Box>
        )
    }
    if (!user.email) {
        return    <Navigate to="/login" state={{from:location}}></Navigate>
    }
    return children;
};

export default PrivateRoute;