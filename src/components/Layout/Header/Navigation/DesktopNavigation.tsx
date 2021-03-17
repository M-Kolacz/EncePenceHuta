import React from 'react';
import { Grid, Link, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import NavigationLinks from 'shared/SSOT/NavigationLinks';

import useStyles from './DesktopNavigationStyles';

export interface NavigationListProps {}

const NavigationList: React.FC<NavigationListProps> = () => {
    const theme = useTheme();
    const classes = useStyles();

    const activeStyle = {
        color: theme.palette.secondary.main,
    };

    return (
        <Grid container item justify='flex-end' alignItems='center' md={9}>
            <ul className={classes.NavigationList}>
                {NavigationLinks.map(({ path, title }) => (
                    <li className={classes.ListItem} key={title}>
                        <Button component='a' href={path} className={classes.NavigationLink}>
                            {title}
                        </Button>
                    </li>
                ))}
            </ul>
        </Grid>
    );
};

export default NavigationList;
