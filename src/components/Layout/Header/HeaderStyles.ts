import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, palette, spacing, typography }) => ({
    HeaderContainer: {
        borderBottom: `1px solid ${palette.primary.main}`,
        [breakpoints.up('md')]: {
            border: `1px solid ${palette.primary.main}`,
        },
    },
    LogoContainer: {
        borderRight: `1px solid ${palette.primary.main}`,
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
    NavigationLink: {
        fontSize: typography.h4.fontSize,
        paddingRight: '1rem',
        paddingLeft: '1rem',
        fontFamily: typography.body1.fontFamily,
        textTransform: 'capitalize',
    },
}));

export default useStyles;
