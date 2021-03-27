import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from 'shared/theme/main';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='pl'>
                <Head>
                    {/* PWA primary color */}
                    <meta name='theme-color' content={theme.palette.primary.main} />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        rel='stylesheet'
                        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
                    />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />

                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
                    <title>Ence Pence Żłobek Nowa Huta</title>
                    <link rel='icon' type='image/svg' href='images/svg/rainbow.svg' />
                    <meta
                        name='description'
                        content='Ence Pence Żłobek Nowa Huta. Profesjonalna opieka nad dziećmi w wieku od 5 miesiecy do 3/4 lat.'
                    />
                    <meta name='robots' content='index, follow' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};
