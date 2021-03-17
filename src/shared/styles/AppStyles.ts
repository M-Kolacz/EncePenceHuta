import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    AppContainer: {
        [breakpoints.up('md')]: {
            padding: spacing(1, 2),
        },
    },
}));

export default useStyles;
