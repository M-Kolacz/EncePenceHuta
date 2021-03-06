import { Grid, Box, Typography, Hidden } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import useStyles from './HeroStyles';

export interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
    const { palette } = useTheme();
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.HeroContainer} component='section'>
            <Hidden>
                <Box className={classes.HeroTitleContainer}>
                    <Typography variant='h1' component='h2'>
                        <span style={{ display: 'block' }}> Witaj w</span>
                        <span style={{ color: palette.primary.main }}>Żłobku </span>
                        <span style={{ color: palette.lightBlue.main }}>Nowa </span>
                        <span style={{ color: palette.secondary.main }}>Huta!</span>
                    </Typography>
                </Box>
            </Hidden>
        </Grid>
    );
};
