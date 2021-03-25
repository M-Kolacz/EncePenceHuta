import { Grid } from '@material-ui/core';

import Logo from 'components/UIElements/Logo';
import MobileNavigation from './Navigation/MobileNavigation';
import DesktopNavigation from './Navigation/DesktopNavigation';

import useStyles from './HeaderStyles';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const classes = useStyles();

    return (
        <Grid container item xs={12} component='header' className={classes.HeaderContainer}>
            <Grid item xs={12} md={3} className={classes.LogoContainer}>
                <Logo link />
            </Grid>
            <DesktopNavigation />
            <MobileNavigation />
        </Grid>
    );
};
export default Header;
