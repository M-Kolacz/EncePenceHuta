import Head from 'next/head';
import { useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import type { AppProps } from 'next/app';

import theme from 'shared/theme/main';
import useStyles from 'shared/styles/AppStyles';

function MyApp({ Component, pageProps }: AppProps) {
    const classes = useStyles();

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>My page</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Grid container className={classes.AppContainer}>
                        <Component {...pageProps} />
                    </Grid>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
