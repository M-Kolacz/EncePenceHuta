import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    ServiceContainer: {
        padding: spacing(0, 1),
        margin: spacing(3, 0),
    },
    ServiceTitleContainer: {
        textAlign: 'center',
        margin: spacing(2, 0),
    },

    ServiceItemContainer: {
        textAlign: 'center',
    },
    ServiceItemTitle: { margin: spacing(2, 0) },
}));

export default useStyles;
