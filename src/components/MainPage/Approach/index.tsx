import { Grid, Box, Typography } from '@material-ui/core';

import useStyles from './ApproachStyles';

export interface ApproachProps {}

const Approach: React.FC<ApproachProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12}>
            <Grid item xs={12} md={6}>
                <img src='images/svg/hero4.svg' alt='' style={{ width: '100%' }} />
            </Grid>
            <Grid container justify='space-evenly' alignItems='center' item xs={12} md={6}>
                <Box textAlign='center'>
                    <Typography variant='h2' className={classes.ServiceItemTitle}>
                        Nasze Podejście
                    </Typography>
                    <Typography variant='h6'>
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

export default Approach;
