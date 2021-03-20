import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: palette.background.paper,
        [breakpoints.up('md')]: {
            padding: spacing(0, 4),
        },
    },
}));

export default useStyles;
