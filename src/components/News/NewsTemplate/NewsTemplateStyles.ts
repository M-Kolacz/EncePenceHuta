import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    ContainerTitle: {
        margin: spacing(2, 'auto'),
    },
    Title: {
        margin: spacing(2, 0),
        textAlign: 'center',
    },
    Image: {
        display: 'block',
        margin: spacing(1, 'auto'),
    },
}));

export default useStyles;
