import Head from 'next/head';
import { ScrollableTabsButtonForce } from 'components/Offer';

export interface OffertProps {}

const Offert: React.FC<OffertProps> = () => {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='Ence Pence Żłobek Nowa Huta. Profesjonalna opieka nad dziećmi w wieku od 5 miesięcy do 3/4 lat. Oferta żłobka skierowana do rodziców.'
                />
            </Head>
            <ScrollableTabsButtonForce />
        </>
    );
};

export default Offert;
