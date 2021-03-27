import { Grid, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface ErrorPageProps {}

const useStyles = makeStyles(({ spacing, typography, breakpoints }) => ({
    ErrorImageContainer: {
        margin: spacing(0, 'auto'),
    },
    ErrorImage: {
        width: '100%',
    },
    ErrorLinkContainer: {
        textAlign: 'center',
    },
    ErrorLink: {
        fontSize: typography.h3.fontSize,
        [breakpoints.up('sm')]: {
            fontSize: typography.h1.fontSize,
        },
    },
}));

const ErrorPage: React.FC<ErrorPageProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12}>
            <Grid item xs={10} className={classes.ErrorImageContainer}>
                <img src='images/svg/error404.svg' alt='Błąd 404' className={classes.ErrorImage} />
            </Grid>
            <Grid item xs={12} className={classes.ErrorLinkContainer}>
                <Button component={Link} href='/' color='secondary' className={classes.ErrorLink}>
                    Powrót do strony głównej
                </Button>
            </Grid>
        </Grid>
    );
};

export default ErrorPage;
