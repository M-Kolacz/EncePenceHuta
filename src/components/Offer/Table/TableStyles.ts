import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    TableContainer: {
        minHeight: '50vh',
    },
    TabContainer: {
        padding: spacing(3),
        margin: spacing(0, 'auto'),
    },
}));

export default useStyles;
