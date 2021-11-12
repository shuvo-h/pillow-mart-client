import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import {Grid} from '@mui/material'

const upcommingProduct = (props) => {
    const {upCommingImg, upCommingPrice, upCommingSize, upCommingSize_unit, upCommingTitle} = props.upcommingProduct;
    console.log(props.upcommingProduct);
    return (
            <Grid item xs={12} sm={4} md={3}>
        <ImageListItem>
                <img
                    style={{width:"100%"}}
                    src={upCommingImg}
                    alt=""
                    loading="lazy"
                />
                <ImageListItemBar
                    title={upCommingTitle}
                    subtitle={`$ ${upCommingPrice}`}
                    actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        // aria-label={`info about ${item.title}`}
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