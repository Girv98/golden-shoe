import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from './../../redux/Products/products.actions';

// Components
import Filters from './../../components/Filters';
import CardList from './../../components/CardList';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const Home = props => {

    const dispatch = useDispatch();
    const { products } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        )
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const [showFilters, setShowFilters] = useState(false);
    const [showOOS, setOOS] = useState(false);


    // Filter Values
    const [gender, setGender] = useState("a");
    const [colour, setColour] = useState("a");
    const [size, setSize] = useState("a");

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);


    useEffect(() => {
            window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1200;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
        }, [isMobile]);

    if (Array.isArray(products)) return null;
    if (products.length < 1) {
        return (
            <section>
                <p> No items available</p>
            </section>
        );

    }


    return (

        <>
        {}

        <section>
        <div className="buttons is-right">
            <button className="button" onClick={() => setOOS(!showOOS)}>{showOOS ? "Hide" : "Show"} Unavailable</button>
            <button className="button" onClick={() => setShowFilters(!showFilters)}>{showFilters ? "Hide" : "Show"} Filters</button>
            <button className="button mr-6">Sort by Price</button>
        </div>
            <div className="home-wrapper columns is-gapless"> 
                <div className={`filter-wrapper column ${isMobile ? "is-one-quarter" : "is-one-fifth"} ${showFilters ? "" : "is-hidden"}`}>
                    <Filters productsArray={products} 
                            gender={gender}
                            setGender={setGender} 
                            colour={colour}
                            setColour={setColour} 
                            size={size}
                            setSize={setSize}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice} />
                </div>
                
                <div className="card-wrapper column">
                    <CardList productsArray={products} showOOS={showOOS}/>
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;
