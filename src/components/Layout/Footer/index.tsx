import React from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';

import PhotoIcon from '@material-ui/icons/Photo';
import FacebookIcon from '@material-ui/icons/Facebook';

import useStyles from './FooterStyles';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} component='footer' className={classes.FooterContainer}>
            <Grid item xs={12} md={9} className={classes.CopyRightsContainer}>
                <Typography variant='body2' className={classes.CopyRightsDate}>
                    © 2020 Ence Pence
                </Typography>
                <Typography variant='body2' className={classes.CopyRightsLogo}>
                    Żłobek Nowa Huta
                </Typography>
            </Grid>
            <Grid
                container
                item
                xs={12}
                md={3}
                justify='space-evenly'
                alignItems='center'
                className={classes.IconsContainer}
            >
                <IconButton className={classes.Icon} component='a' href='/#gallery'>
                    <PhotoIcon />
                </IconButton>
                <IconButton className={classes.Icon} component='a' href='https://www.facebook.com/encepencehuta'>
                    <FacebookIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};
export default Footer;
