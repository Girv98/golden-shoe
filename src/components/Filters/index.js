import React from 'react';

import MultiRangeSlider from './../../components/MultiRangeSlider';
import SizeButtons from './../../components/SizeButtons';
 

const Filters = props =>  {

    const handleGender = (g) => {

        if (props.gender === g) {
            props.setGender("a");
        } else {
            props.setGender(g);
        }
    }

    const handleColour = (c) => {

        if (props.colour === c) {
            props.setColour("a");
        } else {
            props.setColour(c);
        }
    }

    return (
        <>
        <div>
            <h2>Gender</h2>
            <button className={`button ${props.gender === "m" ? "is--active" : "is--not-active"}`} onClick={() => handleGender("m")}>Male</button>
            <button className={`button ${props.gender === "f" ? "is--active" : "is--not-active"}`} onClick={() => handleGender("f")}>Female</button>
        </div>

        <div>
            <h2>Price</h2>
            <MultiRangeSlider min={props.minPriceRef} max={props.maxPriceRef} setMin={props.setMinPrice} setMax={props.setMaxPrice} />
        </div>

        <div className="size-buttons--home">
            <h2>Size</h2>
            <SizeButtons size={props.size} setSize={props.setSize} />
        </div>

        <div>
            <h2>Colour</h2>
            <button className={`button black ${props.colour === "black" ? "is--active" : "is--not-active"}`} onClick={() => handleColour("black")}>Black</button>
            <button className={`button blue ${props.colour === "blue" ? "is--active" : "is--not-active"}`} onClick={() => handleColour("blue")}>Blue</button>
            <button className={`button brown ${props.colour === "brown" ? "is--active" : "is--not-active"}`} onClick={() => handleColour("brown")}>Brown</button>
            <button className={`button white ${props.colour === "white" ? "is--active" : "is--not-active"}`} onClick={() => handleColour("white")}>White</button>
            <button className={`button red ${props.colour === "red" ? "is--active" : "is--not-active"}`} onClick={() => handleColour("red")}>Red</button>
        </div>
        </>
    );
};


export default Filters;
