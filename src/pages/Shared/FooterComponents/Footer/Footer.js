import { Box } from '@mui/system';
import React from 'react';
import FooterLinks from '../FooterLinks/FooterLinks';
import FooterStartedPaper from '../FooterStartedPaper/FooterStartedPaper';

const Footer = () => {
    return (
        <Box sx={{pb:3,backgroundColor:"DarkSlateGray"}}>
            <Box sx={{mt:13}}>
                <FooterStartedPaper></FooterStartedPaper>
            </Box>
            <Box sx={{color:"white"}}>
                <FooterLinks></FooterLinks>
            </Box>
        </Box>
    );
};

export default Footer;