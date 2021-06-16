import React from 'react';
//import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Card() {

    const itemName = "Placeholder"
    const itemPrice = "£100.00";
    const itemImage = "https://bulma.io/images/placeholders/1280x960.png";

    return (
        <Link to="/basket">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={itemImage} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="subtitle left">{itemName}</div>
                    <div className="subtitle right">{itemPrice}</div>
                </div>

            </div>
        </Link>
    );
};

export default Card;
