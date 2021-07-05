import React from 'react';

const SizeButtons = props => {

    function handleSize(s) {

        if (props.size === s) {
            props.setSize("a")
        } else {
            props.setSize(s)
        }
    }

    return (
        <div className="buttons buttons__size-colour is-centered mb-5">
            {/* <button className={`button ${props.size === "a" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("a")}>All</button> */}
            <div>
                <button className={`button ${props.size === "2" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("2")}>2</button>
                <button className={`button ${props.size === "3" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("3")}>3</button>
                <button className={`button ${props.size === "4" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("4")}>4</button>
                <button className={`button ${props.size === "5" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("5")}>5</button>
                <button className={`button ${props.size === "6" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("6")}>6</button>
                <button className={`button ${props.size === "7" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("7")}>7</button>
                <button className={`button ${props.size === "8" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("8")}>8</button>
                <button className={`button ${props.size === "9" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("9")}>9</button>
                <button className={`button ${props.size === "10" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("10")}>10</button>
                <button className={`button ${props.size === "11" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("11")}>11</button>
                <button className={`button ${props.size === "12" ? "is--active" : "is--not-active"}`} onClick={() => handleSize("12")}>12</button>
            </div>
        </div>
    );
};


export default SizeButtons;
