import Hero from 'components/MainPage/Hero';
import Service from 'components/MainPage/Service';
import Approach from 'components/MainPage/Approach';
import Opinions from 'components/MainPage/Opinions';
import Gallery from 'components/MainPage/Gallery';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Hero />
            <Service />
            <Approach />
            <Gallery />
            <Opinions />
        </>
    );
};

export default Home;
