import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const FooterStartedPaper = () => {
    return (
        <Box sx={{width:{xs:"80%", sm:"60%"}, margin:"auto", transform:"translateY(-50%)"}}>
            <Paper sx={{p:{xs:1, sm:2}, px:{md:4}, display:{xs:"block", sm:"flex"}, justifyContent:{sm:"space-between"}, alignItems:"center" , boxShadow:"2px 2px 7px 1px Blue", borderRadius:"20px"}} elevation={3} >
                <Box>
                    <Typography sx={{color:"RoyalBlue"}} variant="h4" gutterBottom component="div">
                        Ready to get started?
                    </Typography>
                    <Typography sx={{color:"Chocolate"}} variant="h4" gutterBottom component="div">
                        Talk to us today
                    </Typography>
                </Box>
                <Box>
                    <Button variant="contained">Get Started</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default FooterStartedPaper;