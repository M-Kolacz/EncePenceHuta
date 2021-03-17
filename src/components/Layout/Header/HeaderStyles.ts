import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, palette, spacing, typography }) => ({
    HeaderContainer: {
        position: 'relative',
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

    NavigationLink: {
        fontSize: typography.h4.fontSize,
        paddingRight: '1rem',
        paddingLeft: '1rem',
        fontFamily: typography.body1.fontFamily,
        textTransform: 'capitalize',
    },
}));

export default useStyles;
