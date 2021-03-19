import React from 'react';

import { GridList, GridListTile, Grid, useMediaQuery } from '@material-ui/core';

import GalleryData from 'shared/SSOT/GalletyData';

import useStyles from './GaleryStyles';

export interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
    const classes = useStyles();

    const isMobile = useMediaQuery('(max-width:960px)');

    return (
        <Grid item xs={12} className={classes.root}>
            <GridList cellHeight={800} cols={3} spacing={20}>
                {GalleryData.map((tile) => (
                    <GridListTile key={tile.img} cols={isMobile ? 3 : tile.cols}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </Grid>
    );
};
