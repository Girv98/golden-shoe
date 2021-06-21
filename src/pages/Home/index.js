import React, { useEffect, useState } from 'react';

// Components
import Filters from './../../components/Filters';
import CardList from './../../components/CardList';



const Home = props => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
            window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1200;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
        }, [isMobile]);


    return (
        <>
        <section>
            <div className="home-wrapper columns is-gapless"> 
                <div className={`filter-wrapper column ${isMobile ? "is-one-quarter" : "is-one-fifth"}`}>       
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
