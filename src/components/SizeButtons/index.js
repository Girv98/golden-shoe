import React, {useState} from 'react';

const SizeButtons = props => {

    return (
        <div className="buttons buttons__size-colour is-centered mb-5">
            <button className={`button ${props.size === "a" ? "is-active" : ""}`} onClick={() => props.setSize("a")}>All</button>
            <div>
                <button className={`button ${props.size === "2" ? "is-active" : ""}`} onClick={() => props.setSize("2")}>2</button>
                <button className={`button ${props.size === "3" ? "is-active" : ""}`} onClick={() => props.setSize("3")}>3</button>
                <button className={`button ${props.size === "4" ? "is-active" : ""}`} onClick={() => props.setSize("4")}>4</button>
                <button className={`button ${props.size === "5" ? "is-active" : ""}`} onClick={() => props.setSize("5")}>5</button>
                <button className={`button ${props.size === "6" ? "is-active" : ""}`} onClick={() => props.setSize("6")}>6</button>
                <button className={`button ${props.size === "7" ? "is-active" : ""}`} onClick={() => props.setSize("7")}>7</button>
                <button className={`button ${props.size === "8" ? "is-active" : ""}`} onClick={() => props.setSize("8")}>8</button>
                <button className={`button ${props.size === "9" ? "is-active" : ""}`} onClick={() => props.setSize("9")}>9</button>
                <button className={`button ${props.size === "10" ? "is-active" : ""}`} onClick={() => props.setSize("10")}>10</button>
                <button className={`button ${props.size === "11" ? "is-active" : ""}`} onClick={() => props.setSize("11")}>11</button>
                <button className={`button ${props.size === "12" ? "is-active" : ""}`} onClick={() => props.setSize("12")}>12</button>
            </div>
        </div>
    );
};


export default SizeButtons;
