import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    ApproachContainer: {
        margin: spacing(3, 0),
    },
    ApproachImage: {
        width: '100%',
    },
    ApproachTitle: { margin: spacing(2, 0) },
    ApproachDescription: {
        padding: spacing(0, 1),
    },
}));

export default useStyles;
