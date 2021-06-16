import React from 'react';

// Components
import Card from './../../components/Card';
import MultiRangeSlider from './../../components/MultiRangeSlider';

const Home = props => {
    return (
        <>
        <MultiRangeSlider min={0} max={300}/>
        <section>        
            <Card/>
            <Card/>
            <Card/>
        </section>
        </>
    );
};

export default Home;
