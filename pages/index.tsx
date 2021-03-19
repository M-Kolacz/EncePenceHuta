import Hero from 'components/MainPage/Hero';
import Service from 'components/MainPage/Service';
import Approach from 'components/MainPage/Approach';
import Opinions from 'components/MainPage/Opinions';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Hero />
            <Service />
            <Approach />
            <Opinions />
        </>
    );
};

export default Home;
