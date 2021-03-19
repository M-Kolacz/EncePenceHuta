import { Grid, Typography } from '@material-ui/core';

import ServiceData from 'shared/SSOT/ServiceData';

import useStyles from './ServiceStyles';

export interface ServiceProps {}

export const Service: React.FC<ServiceProps> = () => {
    const classes = useStyles();
    return (
        <Grid container justify='space-evenly' alignItems='center' item xs={12} className={classes.ServiceContainer}>
            <Grid item xs={12} className={classes.ServiceTitleContainer}>
                <Typography variant='h1' className={classes.ServiceTitle}>
                    Oferujemy
                </Typography>
            </Grid>
            {ServiceData.map(({ title, description, image }) => (
                <Grid item xs={12} md={3} className={classes.ServiceItemContainer} key={title}>
                    <img src={image} alt='Bike' />
                    <Typography variant='h2' className={classes.ServiceItemTitle}>
                        {title}
                    </Typography>
                    <Typography variant='h6'>{description}</Typography>
                </Grid>
            ))}
        </Grid>
    );
};
