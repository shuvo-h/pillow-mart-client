import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import useAuth from '../../../../hooks/useAuth';

const Pay = () => {
    const {user} = useAuth();
    return (
        <Box sx={{textAlign:"center"}}>
            <Typography variant="h4"> Hey {user.displayName} <EmojiEmotionsIcon color="warning" />  </Typography>
            <Typography variant="h4"> Payment System is Comming Soon!  </Typography>
            <div>
                <img style={{display:"block", margin:"auto"}} src="https://i.ibb.co/dL5KBC6/payment-syatem.jpg" alt="" />
            </div>
        </Box>
    );
};

export default Pay;