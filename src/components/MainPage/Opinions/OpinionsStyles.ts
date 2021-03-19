import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
    OpinionsContainer: {
        height: '700px',
        backgroundSize: 'cover',
        backgroundPosition: '40% 20%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: 'url(images/svg/opinionsBackground.svg)',
        [breakpoints.up('md')]: {
            backgroundPosition: 'center',
        },
    },

    root: {
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        padding: spacing(2),
        backgroundColor: 'white',
        border: `1px solid ${palette.primary.main}`,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: spacing(4),
        backgroundColor: 'white',
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
    ServiceItemTitle: { fontWeight: 400 },
}));

export default useStyles;
