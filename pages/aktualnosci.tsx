import { Invite, Dotations, Maluch } from 'components/News';

export interface NewsPageProps {}

const NewsPage: React.FC<NewsPageProps> = () => {
    return (
        <>
            <Invite />
            <Dotations />
            <Maluch />
        </>
    );
};

export default NewsPage;
