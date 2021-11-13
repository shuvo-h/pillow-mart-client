import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import {Grid} from '@mui/material'

const upImgStyle ={
    transition: "transform 0.4s linear",
    "&:hover":{
        transform: "scale(1.18)",
    }
}

const upcommingProduct = (props) => {
    const {upCommingImg, upCommingPrice, upCommingSize, upCommingSize_unit, upCommingTitle} = props.upcommingProduct;
    return (
            <Grid item xs={12} sm={4} md={3} sx={{p:1,overflow:"hidden"}}>
                    <ImageListItem sx={upImgStyle}>
                        <img
                            style={{width:"100%"}}
                            src={upCommingImg}
                            alt=""
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={upCommingTitle}
                            subtitle={`$ ${upCommingPrice}  ${upCommingSize} ${upCommingSize_unit}`}
                            actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            >
                                <InfoIcon />
                            </IconButton>
                            }
                        />
                    </ImageListItem>
  </Grid>
    );
};

export default upcommingProduct;