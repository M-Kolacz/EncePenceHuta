import { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import Snackbar from 'components/UIElements/Snackbar';

import { initialValues, validationSchema, fieldsData, sendEmail } from './data';

import useStyles from './EmailFormStyles';

export interface EmailFormProps {}

const { userEmail, userName, message } = fieldsData;

const EmailForm: React.FC<EmailFormProps> = () => {
    const classes = useStyles();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSuccess = () => {
        setSuccess((prevState) => !prevState);
    };
    const handleError = () => {
        setError((prevState) => !prevState);
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    const response = await sendEmail(values).catch((err) => null);
                    if (!response || !response.ok) {
                        return setError(true);
                    }
                    return setSuccess(true);
                }}
                validationSchema={validationSchema}
            >
                <Form className={classes.FormContainer}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                {...userName}
                                className={classes.TextField}
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                {...userEmail}
                                className={classes.TextField}
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                {...message}
                                className={classes.TextField}
                                variant='outlined'
                                multiline
                                rows={6}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth color='primary' variant='outlined' type='submit'>
                                Wyślij wiadomość
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
            <Snackbar open={success} onClose={handleSuccess} severity='success'>
                Email został wysłany!
            </Snackbar>
            <Snackbar open={error} onClose={handleError} severity='error'>
                Niestety email nie został wysłany. Spróbuj ponownie później.
            </Snackbar>
        </>
    );
};

export default EmailForm;
