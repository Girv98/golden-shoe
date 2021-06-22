import React, {useState} from 'react';

import MultiRangeSlider from './../../components/MultiRangeSlider';
import SizeButtons from './../../components/SizeButtons';
 

function Filters() {

    const [gender, setGender] = useState("a");
    const [colour, setColour] = useState("a");

    return (
        <>
        <div className="has-text-centered">
            <h2 className="subtitle mb-4">Gender</h2>
            <div className="buttons is-centered mb-5">
                <button className={`button ${gender === "a" ? "is-active" : ""}`} onClick={() => setGender("a")}>All</button>
                <button className={`button ${gender === "m" ? "is-active" : ""}`} onClick={() => setGender("m")}>Male</button>
                <button className={`button ${gender === "f" ? "is-active" : ""}`} onClick={() => setGender("f")}>Female</button>
            </div>
        </div>

        <div className="has-text-centered">
            <h2 className="subtitle mb-4">Price</h2>
            <div className="mb-4">
                <MultiRangeSlider min={0} max={300} />
            </div>
        </div>

        <div className="has-text-centered">
            <h2 className="subtitle mb-4">Size</h2>
            <div className="is-centered">
                <SizeButtons />
            </div>
        </div>

        <div className="has-text-centered">
            <h2 className="subtitle">Colour</h2>
            <div className="buttons buttons__size-colour is-centered mb-5">
                <button className={`button ${colour === "a" ? "is-active" : ""}`} onClick={() => setColour("a")}>All</button>
                <div>
                    <button className={`button ${colour === "black" ? "is-active" : ""}`} onClick={() => setColour("black")}>Black</button>
                    <button className={`button ${colour === "blue" ? "is-active" : ""}`} onClick={() => setColour("blue")}>Blue</button>
                    <button className={`button ${colour === "brown" ? "is-active" : ""}`} onClick={() => setColour("brown")}>Brown</button>
                    <button className={`button ${colour === "white" ? "is-active" : ""}`} onClick={() => setColour("white")}>White</button>
                    <button className={`button ${colour === "red" ? "is-active" : ""}`} onClick={() => setColour("red")}>Red</button>
                </div>
            </div>
        </div>
        </>
    );
};


export default Filters;
