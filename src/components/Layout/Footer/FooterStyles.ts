import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    FooterContainer: {
        marginTop: spacing(2),
        [breakpoints.up('md')]: {
            border: `1px solid ${palette.primary.main}`,
        },
    },
    CopyRightsContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',

        [breakpoints.up('md')]: {
            flexDirection: 'row',
            textAlign: 'left',
            alignItems: 'center',
        },
    },
    CopyRightsDate: {
        [breakpoints.up('md')]: {
            marginLeft: spacing(2),
        },
    },
    CopyRightsLogo: {
        [breakpoints.up('md')]: {
            marginLeft: spacing(1),
        },
    },
    IconsContainer: {
        backgroundColor: palette.primary.main,
    },
    Icon: {
        color: palette.common.white,
    },
}));

export default useStyles;
