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
        let isMounted = true;
        if (isMounted) {
        dispatch(
            fetchProductsStart()
        )}
        return () => {isMounted = false}
    }, [dispatch]);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const [showFilters, setShowFilters] = useState(false);
    const [showOOS, setOOS] = useState(false);


    // Filter Values
    const [gender, setGender] = useState("a");
    const [colour, setColour] = useState("a");
    const [size, setSize] = useState("a");

    const minPriceRef = 0;
    const maxPriceRef = 80;
    const [minPrice, setMinPrice] = useState(minPriceRef);
    const [maxPrice, setMaxPrice] = useState(maxPriceRef);

    


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

        <section>
            <div className="btns">
                <button className="button is--active" onClick={() => setOOS(!showOOS)}>{showOOS ? "Hide" : "Show"} Unavailable</button>
                <button className="button is--active" onClick={() => setShowFilters(!showFilters)}>{showFilters ? "Hide" : "Show"} Filters</button>
                {/* <button className="button mr-6">Sort by Price</button> */}
            </div>
            <div className={`home-wrapper ${showFilters ? "" : "is--hidden"}`}> 
                <div className={`filter-wrapper has-background-secondary ${showFilters ? "" : "is--hidden"}`}>
                    <Filters productsArray={products} 
                            gender={gender}
                            setGender={setGender} 
                            colour={colour}
                            setColour={setColour} 
                            size={size}
                            setSize={setSize}
                            minPriceRef={minPriceRef}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPriceRef={maxPriceRef}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice} />
                </div>
                
                <div className="card-wrapper column has-background-primary">
                    <CardList productsArray={products}
                            showOOS={showOOS} 
                            gender={gender} 
                            colour={colour} 
                            size={size} 
                            minPrice={minPrice}
                            maxPrice={maxPrice} />
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;
