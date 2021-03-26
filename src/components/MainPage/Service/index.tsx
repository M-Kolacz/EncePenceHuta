import { Grid, Typography } from '@material-ui/core';

import ServiceData from 'shared/SSOT/ServiceData';
import BlankText from 'components/UIElements/BlankText';

import useStyles from './ServiceStyles';

export interface ServiceProps {}

export const Service: React.FC<ServiceProps> = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            justify='space-evenly'
            alignItems='center'
            item
            xs={12}
            className={classes.ServiceContainer}
            component='section'
        >
            <Typography variant='h2' className={classes.ServiceTitleContainer}>
                Oferujemy
            </Typography>

            {ServiceData.map(({ title, description, blankText, image }) => (
                <Grid item xs={12} md={3} className={classes.ServiceItemContainer} key={title}>
                    <img src={image} alt='Bike' />
                    <Typography variant='h3' className={classes.ServiceItemTitle}>
                        {title}
                    </Typography>
                    <Typography variant='body1'>
                        {description}
                        <BlankText variant='body1'>{blankText}</BlankText>
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};
