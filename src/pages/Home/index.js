import React from 'react';

// Components
import Filters from './../../components/Filters';
import CardList from './../../components/CardList';


const Home = props => {
    return (
        <>
        <section>
            <Filters />
            <CardList />
        </section>
        </>
    );
};

export default Home;
