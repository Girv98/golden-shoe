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
        <Link to={`/product/${id}`}>
            <div className="crd has-background-secondary">
                <img className="card--image" src={itemImage} alt="Shoe" />
                <div className="card--content">
                    <h2 className="card--title">{itemName}</h2>
                    <h3 className={`card--price ${inStock ? "" : "has-text--accent"}`}>{inStock ? `£${itemPrice}` : warningText }</h3>
                </div>

            </div>
        </Link>
    );
};

export default Card;
