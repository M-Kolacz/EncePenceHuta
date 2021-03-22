import { Grid, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { initialValues, validationSchema, fieldsData, sendEmail } from './data';

import useStyles from './EmailFormStyles';

export interface EmailFormProps {}

const { userEmail, userName, message } = fieldsData;

const EmailForm: React.FC<EmailFormProps> = () => {
    const classes = useStyles();
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                const response = await sendEmail(values);
                console.log(response);
            }}
            validationSchema={validationSchema}
        >
            <Form className={classes.FormContainer}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Field component={TextField} {...userName} className={classes.TextField} variant='outlined' />
                    </Grid>
                    <Grid item xs={12}>
                        <Field component={TextField} {...userEmail} className={classes.TextField} variant='outlined' />
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
    );
};

export default EmailForm;
