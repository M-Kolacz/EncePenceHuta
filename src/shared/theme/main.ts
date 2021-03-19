import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        h1: { fontSize: '4.4rem', fontFamily: 'Roboto', fontWeight: 500 },
        h2: { fontSize: '3.5rem', fontFamily: 'Roboto', fontWeight: 400 },
        h3: { fontSize: '2.6rem', fontFamily: 'Roboto' },
        h4: { fontSize: '1.5rem', fontFamily: 'Open Sans' },
        body1: { fontSize: '1.5rem', fontFamily: 'Open Sans' },
        body2: { fontSize: '1.2rem', fontFamily: 'Open Sans' },
    },
    palette: {
        primary: {
            main: '#213472',
            light: '#535da1',
            dark: '#000f46',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#FA7439',
            light: '#ffa567',
            dark: '#c14407',
            contrastText: '#000000',
        },
        darkBlue: {
            main: '#4692D8',
            light: '#7fc2ff',
            dark: '#0065a6',
            contrastText: '#000000',
        },
        lightBlue: {
            main: '#48D0FA',
            light: '#87ffff',
            dark: '##009fc7',
            contrastText: '#000000',
        },
    },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
