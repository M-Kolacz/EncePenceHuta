import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, palette, spacing, typography }) => ({
    HeaderContainer: {
        height: '165px',
        position: 'relative',
        borderBottom: `1px solid ${palette.primary.main}`,
        [breakpoints.up('md')]: {
            border: `1px solid ${palette.primary.main}`,
        },
    },
    SkipLink: {
        position: 'absolute',
        top: '-1000px',
        left: '-1000px',
        background: '#000000',
        color: 'transparent',
        zIndex: -100,
    },

    LogoContainer: {
        borderRight: `1px solid ${palette.primary.main}`,
        padding: spacing(1),
        textAlign: 'center',
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
