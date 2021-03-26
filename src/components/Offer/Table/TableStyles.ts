import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    TableContainer: {
        margin: spacing(2, 0),
        minHeight: '50vh',
    },
    TabContainer: {
        padding: spacing(3),
        margin: spacing(0, 'auto'),
    },
}));

export default useStyles;
