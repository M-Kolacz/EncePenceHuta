import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    ServiceContainer: {
        padding: spacing(0, 1),
    },
    ServiceTitleContainer: {
        textAlign: 'center',
        margin: spacing(1),
    },

    ServiceItemContainer: {
        textAlign: 'center',
    },
    ServiceItemTitle: { fontWeight: 400 },
}));

export default useStyles;
