import React from 'react';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Section from './Section/Section';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <CategoryTitle></CategoryTitle>
            <Section></Section>
            <Footer></Footer>
        </div>
    );
};

export default Home;