import React from 'react';
//import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Card = props => {

    const itemName = props.name;
    const itemPrice = props.price;
    const itemImage = props.image;
    
    //let sizes = props.sizes;

    const stock = props.stock;
    const inSize = props.inSize;

    const id = props.ID;

    let inStock = false;

    if (stock > 0) {
        inStock = true;
    }

    let warningText = "Out of Stock";

    if (!inSize) {
        warningText = "Not in Size";
    }

    return (
        <Link to={`/product:${id}`}>
            <div className="card has-background-secondary">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={itemImage} alt="Shoe" />
                    </figure>
                </div>
                <div className="card-content has-background-secondary">
                    <div className="subtitle left">{itemName}</div>
                    <div className={`subtitle right ${inStock ? "has-text--dark" : "has-text-danger"}`}>{inStock ? `£${itemPrice}` : warningText }</div>
                </div>

            </div>
        </Link>
    );
};

export default Card;
