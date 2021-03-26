import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
    AskTitle: {
        width: '100%',
        textAlign: 'center',
        margin: spacing(2, 0),
    },
    HrUp: {
        margin: spacing(2, 0, 0),
    },
    HrDown: {
        margin: spacing(0, 0, 2),
    },
    AskContactContainer: {
        textAlign: 'center',
        height: '200px',
        [breakpoints.up('md')]: {
            height: '400px',
        },
    },
    AskAddress: {
        fontStyle: 'normal',
    },
    AskContactBorder: {
        [breakpoints.up('md')]: {
            borderRight: `1px solid ${palette.primary.main}`,
        },
    },

    AskTitile: {
        margin: spacing(2, 0),
    },
    AskDescription: {
        margin: spacing(1, 0),
    },
}));

export default useStyles;
