import * as Yup from 'yup';

const USER_NAME = 'userName';
const USER_EMAIL = 'userEmail';
const MESSAGE = 'message';

export interface IEmailForm {
    userName: string;
    userEmail: string;
    message: string;
}

export const initialValues = {
    [USER_NAME]: '',
    [USER_EMAIL]: '',
    [MESSAGE]: '',
};

export const fieldsData = {
    [USER_NAME]: {
        name: USER_NAME,
        label: 'Imię i nazwisko',
    },
    [USER_EMAIL]: {
        name: USER_EMAIL,
        label: 'Email',
    },
    [MESSAGE]: {
        name: MESSAGE,
        label: 'Treść wiadomości',
    },
};

export const validationSchema = Yup.object({
    [USER_NAME]: Yup.string()
        .min(5, 'Pole wymaga conajmniej 5 znaków')
        .max(100, 'Przekroczono limit znaków')
        .required('Pole jest wymagane'),
    [USER_EMAIL]: Yup.string().email('Nieprawidłowy adres email').required('Pole jest wymagane'),
    [MESSAGE]: Yup.string()
        .min(5, 'Pole wymaga conajmniej 5 znaków')
        .max(1000, 'Przekroczono limit znaków')
        .required('Pole jest wymagane'),
});

const sendData = {
    service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    user_id: process.env.NEXT_PUBLIC_EMAIL_USER_ID,
};

export const sendEmail = async (emailData: IEmailForm) => {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        body: JSON.stringify({ ...sendData, template_params: { ...emailData } }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response;
};
