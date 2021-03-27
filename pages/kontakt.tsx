import Head from 'next/head';
import { OpenHours, Form, Map } from 'components/Contact';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='Ence Pence Żłobek Nowa Huta. Profesjonalna opieka nad dziećmi w wieku od 5 miesięcy do 3/4 lat. Skontaktuj się z personelem żłobka.'
                />
            </Head>
            <OpenHours />
            <Map />
            <Form />
        </>
    );
};

export default Contact;
