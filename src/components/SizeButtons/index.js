import React, {useState} from 'react';

function SizeButtons() {

    const [size, setSize] = useState("a");

    return (
        <div className="buttons buttons__size-colour is-centered mb-5">
            <button className={`button ${size === "a" ? "is-active" : ""}`} onClick={() => setSize("a")}>All</button>
            <div>
                <button className={`button ${size === "2" ? "is-active" : ""}`} onClick={() => setSize("2")}>2</button>
                <button className={`button ${size === "3" ? "is-active" : ""}`} onClick={() => setSize("3")}>3</button>
                <button className={`button ${size === "4" ? "is-active" : ""}`} onClick={() => setSize("4")}>4</button>
                <button className={`button ${size === "5" ? "is-active" : ""}`} onClick={() => setSize("5")}>5</button>
                <button className={`button ${size === "6" ? "is-active" : ""}`} onClick={() => setSize("6")}>6</button>
                <button className={`button ${size === "7" ? "is-active" : ""}`} onClick={() => setSize("7")}>7</button>
                <button className={`button ${size === "8" ? "is-active" : ""}`} onClick={() => setSize("8")}>8</button>
                <button className={`button ${size === "9" ? "is-active" : ""}`} onClick={() => setSize("9")}>9</button>
                <button className={`button ${size === "10" ? "is-active" : ""}`} onClick={() => setSize("10")}>10</button>
                <button className={`button ${size === "11" ? "is-active" : ""}`} onClick={() => setSize("11")}>11</button>
                <button className={`button ${size === "12" ? "is-active" : ""}`} onClick={() => setSize("12")}>12</button>
            </div>
        </div>
    );
};


export default SizeButtons;
