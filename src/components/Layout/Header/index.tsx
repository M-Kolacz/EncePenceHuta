import React from 'react';
import { Grid, Hidden, Typography, Box } from '@material-ui/core';

import DesktopNavigation from './Navigation/DesktopNavigation';

import useStyles from './HeaderStyles';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    const classes = useStyles();

    return (
        <Grid container item xs={12} component='header' className={classes.HeaderContainer}>
            <Grid item xs={12} md={3} className={classes.LogoContainer}>
                <a href='/' className={classes.LogoLink}>
                    <Box>
                        <img src='images/svg/rainbow.svg' alt='Rainbow' className={classes.LogoImg} />
                        <Typography variant='h2' className={classes.LogoTitle} component='h1'>
                            Ence Pence
                        </Typography>
                        <Typography variant='subtitle1' component='h2'>
                            Żłobek Nowa Huta
                        </Typography>
                    </Box>
                </a>
            </Grid>
            <Hidden smDown={true}>
                <DesktopNavigation />
            </Hidden>
        </Grid>
    );
};
