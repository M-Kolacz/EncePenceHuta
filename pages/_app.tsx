import Head from 'next/head';
import { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import type { AppProps } from 'next/app';

import theme from 'shared/theme/main';

function MyApp({ Component, pageProps }: AppProps) {
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
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
