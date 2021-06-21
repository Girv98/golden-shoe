import React, {useState} from 'react';

import MultiRangeSlider from './../../components/MultiRangeSlider'; 

function Filters() {

    const [gender, setGender] = useState("a");

    return (
        <>
        {/* // Gender
        // -    Radials
        // -    Men/Women/Unisex
        
        // Price
        //  -   MinMax Slider 

        // Size
        //  -   Multipicker Grid
        //      3, 3.5, 4, 4.5
        //      5, 5.5, 6, 6.5
        //      7, 7.5, 8, 8.5 etc.
        
        // Colour
        //  -   Multipicker
        //  -   Grid of sizes, i.e. red, blue, black
        
        */}

        <div className="has-text-centered">
            <h2 className="subtitle">Gender</h2>
            <div>
                <button className={`button ${gender === "a" ? "is-active" : ""}`} onClick={() => setGender("a")}>All</button>
                <button className={`button ${gender === "m" ? "is-active" : ""}`} onClick={() => setGender("m")}>Male</button>
                <button className={`button ${gender === "f" ? "is-active" : ""}`} onClick={() => setGender("f")}>Female</button>
            </div>
        </div>
        
        <div className="has-text-centered">
            <h2 className="subtitle">Price</h2>
            <MultiRangeSlider min={0} max={300} />
        </div>

        <div className="has-text-centered">
            <h2 className="subtitle">Size</h2>
            <div></div>
        </div>

        <div className="has-text-centered">
            <h2 className="subtitle">Colour</h2>
            <div></div>
        </div>
        </>
    );
};


export default Filters;
