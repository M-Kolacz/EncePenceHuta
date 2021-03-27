import Head from 'next/head';
import type { AppProps } from 'next/app';

import { useEffect } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'shared/theme/main';

import Layout from 'components/Layout';

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
                <title>Ence Pence Żłobek Nowa Huta</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            </Head>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
