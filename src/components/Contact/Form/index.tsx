import { Grid, Typography } from '@material-ui/core';

import EmailForm from './EmailForm';

import useStyles from './FormStyles';

export interface FormProps {}

export const Form: React.FC<FormProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} component='section'>
            <Typography variant='h2' className={classes.FormTitle}>
                Skontaktuj się z nami
            </Typography>
            <Grid item xs={12} md={6} className={classes.FormContainer}>
                <EmailForm />
            </Grid>
            <Grid item xs={12} md={6}>
                <img src='images/svg/contact.svg' alt='' role='presentation' className={classes.FormImg} />
            </Grid>
        </Grid>
    );
};
