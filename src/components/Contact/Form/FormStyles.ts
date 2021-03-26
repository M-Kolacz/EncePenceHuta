import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    FormTitle: { width: '100%', textAlign: 'center', margin: spacing(2, 0) },
    FormContainer: {
        margin: spacing(2, 0),
    },
    FormImg: {
        width: '100%',
    },
}));

export default useStyles;
