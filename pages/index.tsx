import { Approach, Gallery, Hero, Opinions, Service } from 'components/MainPage';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Hero />
            <Service />
            <Approach />
            <Opinions />
            <Gallery />
        </>
    );
};

export default Home;
