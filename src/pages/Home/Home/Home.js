import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <MySkills></MySkills>
            <Contact></Contact>
        </div>
    );
};

export default Home;