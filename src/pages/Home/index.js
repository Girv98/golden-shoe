import React, { useEffect, useState } from 'react';

// Components
import Filters from './../../components/Filters';
import CardList from './../../components/CardList';



const Home = props => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
            window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1200;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
        }, [isMobile]);



    return (
        <>
        <section>
        <div className="buttons is-right">
            <button className="button" onClick={() => setShowFilters(!showFilters)}>{showFilters ? "Hide" : "Show"} Filters</button>
            <button className="button mr-6">Sort by Price</button>
        </div>
            <div className="home-wrapper columns is-gapless"> 

                <div className={`filter-wrapper column ${isMobile ? "is-one-quarter" : "is-one-fifth"} ${showFilters ? "" : "is-hidden"}`}>       
                    <Filters />
                </div>
                
                <div className="card-wrapper column">
                    <CardList />
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;
