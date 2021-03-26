import React from 'react';
import { Grid, Button, Hidden, Link } from '@material-ui/core';

import NavigationLinks from 'shared/SSOT/NavigationLinksData';

import useStyles from './DesktopNavigationStyles';

export interface NavigationListProps {}

const NavigationList: React.FC<NavigationListProps> = () => {
    const classes = useStyles();

    return (
        <Hidden smDown={true}>
            <Grid container item justify='flex-end' alignItems='center' md={9} component='nav'>
                <ul className={classes.NavigationList}>
                    {NavigationLinks.map(({ path, title }) => (
                        <li className={classes.ListItem} key={title}>
                            <Button component={Link} href={path} className={classes.NavigationLink}>
                                {title}
                            </Button>
                        </li>
                    ))}
                </ul>
            </Grid>
        </Hidden>
    );
};

export default NavigationList;
