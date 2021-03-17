import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    MenuIconContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        margin: spacing(0, 0.5),
    },
    MenuIcon: {
        fontSize: '50px',
    },
    NavigationList: {
        width: '250px',
        paddingInlineStart: '0px',
    },
    NavigationElement: {
        listStyle: 'none',
    },
}));

export default useStyles;
