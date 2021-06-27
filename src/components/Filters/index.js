import React from 'react';

import MultiRangeSlider from './../../components/MultiRangeSlider';
import SizeButtons from './../../components/SizeButtons';
 

const Filters = props =>  {

    return (
        <>
        <div className="has-text-centered pt-6">
            <h2 className="subtitle mb-4">Gender</h2>
            <div className="buttons is-centered mb-6">
                <button className={`button ${props.gender === "a" ? "is--active" : "is--not-active"}`} onClick={() => props.setGender("a")}>All</button>
                <button className={`button ${props.gender === "m" ? "is--active" : "is--not-active"}`} onClick={() => props.setGender("m")}>Male</button>
                <button className={`button ${props.gender === "f" ? "is--active" : "is--not-active"}`} onClick={() => props.setGender("f")}>Female</button>
            </div>
        </div>

        <div className="has-text-centered">
            <h2 className="subtitle">Price</h2>
            <div className="mb-4">
                <MultiRangeSlider min={props.minPriceRef} max={props.maxPriceRef} setMin={props.setMinPrice} setMax={props.setMaxPrice} />
            </div>
        </div>

        <div className="has-text-centered">
            <h2 className="subtitle mb-4">Size</h2>
            <div className="is-centered">
                <SizeButtons size={props.size} setSize={props.setSize} />
            </div>
        </div>

        <div className="has-text-centered">
            <h2 className="subtitle">Colour</h2>
            <div className="buttons buttons__size-colour is-centered mb-5">
                <button className={`button ${props.colour === "a" ? "is--active" : "is--not-active"}`} onClick={() => props.setColour("a")}>All</button>
                <div>
                    <button className={`button ${props.colour === "black" ? "is--active" : "is--not-active"}`} onClick={() => props.setColour("black")}>Black</button>
                    <button className={`button ${props.colour === "blue" ? "is--active" : "is--not-active"}`} onClick={() => props.setColour("blue")}>Blue</button>
                    <button className={`button ${props.colour === "brown" ? "is--active" : "is--not-active"}`} onClick={() => props.setColour("brown")}>Brown</button>
                    <button className={`button ${props.colour === "white" ? "is--active" : "is--not-active"}`} onClick={() => props.setColour("white")}>White</button>
                    <button className={`button ${props.colour === "red" ? "is--active" : "is--not-active"}`} onClick={() => props.setColour("red")}>Red</button>
                </div>
            </div>
        </div>
        </>
    );
};


export default Filters;
