import { Grid, Typography, TextField, Button } from '@material-ui/core';

import useStyles from './FormStyles';

export interface FormProps {}

const sendData = {
    service_id: 'service_oyli6yt',
    template_id: 'template_kw7qdhr',
    user_id: 'user_ZGgdfbaRZWVwNFLhW8HPD',
};

const sendPost = async () => {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        body: JSON.stringify(sendData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response;
};

export const Form: React.FC<FormProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12}>
            <Typography variant='h2' className={classes.FormTitle}>
                Skontaktuj się z nami
            </Typography>
            <Grid item xs={12} md={6} className={classes.FormContainer}>
                <form
                    style={{ width: '75%', margin: '0 auto' }}
                    onSubmit={async (event) => {
                        event.preventDefault();
                        console.log(event.target);
                        const data = await sendPost();
                    }}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField style={{ width: '100%' }} variant='outlined' label='Imię i nazwisko' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField style={{ width: '100%' }} variant='outlined' label='Email' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                style={{ width: '100%' }}
                                variant='outlined'
                                multiline
                                rows={6}
                                label='Treść wiadomości'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth color='primary' variant='outlined' type='submit'>
                                Wyślij wiadomość
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src='images/svg/contact.svg' alt='' style={{ width: '100%' }} />
            </Grid>
        </Grid>
    );
};
