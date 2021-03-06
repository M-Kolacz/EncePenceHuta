import { Grid, Box, Typography } from '@material-ui/core';

import useStyles from './ApproachStyles';

export interface ApproachProps {}

export const Approach: React.FC<ApproachProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} className={classes.ApproachContainer} component='section'>
            <Grid item xs={12} md={6}>
                <img src='images/svg/playingChild.svg' alt='' role='presentation' className={classes.ApproachImage} />
            </Grid>
            <Grid container justify='space-evenly' alignItems='center' item xs={12} md={6}>
                <Box textAlign='center'>
                    <Typography variant='h3' component='h2' className={classes.ApproachTitle}>
                        Nasze Podejście
                    </Typography>
                    <Typography variant='body1' className={classes.ApproachDescription}>
                        Celem otwarcia była myśl pomocy mamom w opiece nad ich skarbami. Tworzymy przyjazną domową
                        atmosferę, oraz poczucie bezpieczeństwa. Wszelkie zabawy i zajęcia dostosowane są do możliwości,
                        zainteresowań, potrzeb, oraz rozwoju dziecka. Placówka wyposażona jest w bezpieczne atestowane
                        zabawki i pomoce edukacyjne.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};
