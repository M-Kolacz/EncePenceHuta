import { OpenHours, Form, Map } from 'components/Contact';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <>
            <OpenHours />
            <Map />
            <Form />
        </>
    );
};

export default Contact;
