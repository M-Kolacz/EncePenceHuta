import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography }) => ({
    NavigationList: {
        display: 'flex',
    },
    ListItem: {
        listStyle: 'none',
    },
    NavigationLink: {
        fontSize: typography.h4.fontSize,
        paddingRight: '1rem',
        paddingLeft: '1rem',
        fontFamily: typography.body1.fontFamily,
        textTransform: 'capitalize',
    },
}));

export default useStyles;
