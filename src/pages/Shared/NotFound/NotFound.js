import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NotFound = () => {
    return (
        <Box sx={{mt:10,display:"flex",flexDirection:"column", alignItems:"center" }}>
            <Typography variant="h3" color="red">Sorry :(</Typography>
            <Typography variant="h4">Page is not found.</Typography>
        </Box>
    );
};

export default NotFound;