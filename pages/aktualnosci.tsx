import Head from 'next/head';
import { Invite, Dotations, Maluch } from 'components/News';

export interface NewsPageProps {}

const NewsPage: React.FC<NewsPageProps> = () => {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='Ence Pence Żłobek Nowa Huta. Profesjonalna opieka nad dziećmi w wieku od 5 miesięcy do 3/4 lat. Aktualności dotyczące zapisów i dotacji do opieki nad dziećmi.'
                />
            </Head>
            <Invite />
            <Dotations />
            <Maluch />
        </>
    );
};

export default NewsPage;
