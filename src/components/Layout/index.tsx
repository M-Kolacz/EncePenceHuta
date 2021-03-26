import { Grid, CssBaseline } from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

import useStyles from './LayoutStyles';

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useStyles();
    return (
        <CssBaseline>
            <Grid container className={classes.AppContainer}>
                <Header />
                <Grid container component='main' id='main'>
                    {children}
                </Grid>
                <Footer />
            </Grid>
        </CssBaseline>
    );
};

export default Layout;
