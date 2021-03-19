import Hero from 'components/MainPage/Hero';
import Service from 'components/MainPage/Service';
import Approach from 'components/MainPage/Approach';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Hero />
            <Service />
            <Approach />
            <div style={{ height: '100vh' }}> test</div>
        </>
    );
};

export default Home;
