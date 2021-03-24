import { Grid, Typography, Box } from '@material-ui/core';

import BlankText from 'components/UIElements/BlankText';

import useStyles from './OpenHoursStyles';

export interface OpenHoursProps {}

export const OpenHours: React.FC<OpenHoursProps> = () => {
    const classes = useStyles();
    return (
        <Grid container justify='space-evenly' alignItems='center' item xs={12}>
            <Typography variant='h2' className={classes.AskTitle}>
                Dane kontaktowe
            </Typography>
            <hr className={classes.Hr} />
            <Grid
                container
                justify='center'
                alignItems='center'
                item
                xs={12}
                md={6}
                className={`${classes.AskContactContainer} ${classes.AskContactBorder}`}
            >
                <Box>
                    <Typography variant='h3' className={classes.AskTitle}>
                        Godziny otwarcia
                    </Typography>
                    <Typography variant='h4' className={classes.AskDescription}>
                        Poniedziałek-Piątek
                    </Typography>
                    <Typography variant='body1'>7:00 - 17:00</Typography>
                    <BlankText variant='body1'>7:00 - 17:00</BlankText>
                </Box>
            </Grid>
            <Grid
                container
                justify='center'
                alignItems='center'
                item
                xs={12}
                md={6}
                className={classes.AskContactContainer}
            >
                <Box>
                    <Typography variant='h3' className={classes.AskTitle}>
                        Odwiedź nas
                    </Typography>
                    <Typography variant='h4' className={classes.AskDescription}>
                        os. Centrum E14 lok.3 31-934 Kraków
                    </Typography>
                    <Typography variant='body1'>Email: zlobekhuta@gmail.com</Typography>
                    <Typography variant='body1'>Tel: 739 048 513 </Typography>
                </Box>
            </Grid>
            <hr className={classes.HrDown} />
        </Grid>
    );
};
