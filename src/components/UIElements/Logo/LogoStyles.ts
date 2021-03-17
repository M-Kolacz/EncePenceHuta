import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    LogoContainer: {
        padding: spacing(1),
        textAlign: 'center',
    },
    LogoLink: {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    },
    LogoImg: {
        width: '100px',
        height: '50px',
    },
    LogoTitle: {
        fontWeight: 500,
    },
}));

export default useStyles;
