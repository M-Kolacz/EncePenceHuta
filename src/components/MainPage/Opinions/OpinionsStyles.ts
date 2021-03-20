import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
    OpinionsContainer: {
        height: '700px',
        textAlign: 'center',
        margin: spacing(3, 0),
        backgroundSize: 'cover',
        backgroundPosition: '40% 20%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: 'url(images/svg/opinionsBackground.svg)',
        [breakpoints.up('md')]: {
            backgroundPosition: 'center',
        },
    },
    OpinionsTitle: { margin: spacing(2, 0) },

    OpinionsBox: {
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        padding: spacing(2),
        backgroundColor: palette.common.white,
        border: `1px solid ${palette.primary.main}`,
    },
    OpinionsAuthor: {
        margin: spacing(1),
        fontWeight: 700,
        textAlign: 'right',
    },
    OpinionsStepper: {
        backgroundColor: palette.common.white,
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
}));

export default useStyles;
