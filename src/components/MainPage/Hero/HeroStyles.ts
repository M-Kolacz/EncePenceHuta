import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    HeroContainer: {
        position: 'relative',

        height: 'calc(100vh - 133px)',

        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: 'url(images/svg/nursery.svg)',
    },
    HeroTitleContainer: {
        position: 'sticky',
        top: 0,
        left: 0,
        margin: spacing(2),
        [breakpoints.up('md')]: {
            margin: spacing(5),
        },
    },
}));

export default useStyles;
