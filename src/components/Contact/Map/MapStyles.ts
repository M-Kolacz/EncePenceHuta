import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography }) => ({
    InfoWindowText: {
        fontSize: typography.caption.fontSize,
    },
}));

export default useStyles;
