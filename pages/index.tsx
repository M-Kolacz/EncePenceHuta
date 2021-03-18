import Hero from 'components/MainPage/Hero';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Hero />
        </>
    );
};

export default Home;
