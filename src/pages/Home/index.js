import React from 'react';

// Components
import CardList from './../../components/CardList';
import MultiRangeSlider from './../../components/MultiRangeSlider';

const Home = props => {
    return (
        <>
        <MultiRangeSlider min={0} max={300} />
        <CardList />
        </>
    );
};

export default Home;
