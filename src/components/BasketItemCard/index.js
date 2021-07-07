
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from './../../redux/Cart/cart.actions';
import { Link } from 'react-router-dom';


// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';



const BasketItemCard  = (product) => {
    const dispatch = useDispatch();

    const {
        productName,
        productImage,
        productPrice,
        documentID
    }  = product[0];

    const {
        quantity
    } = product

    const handleRemoveProduct = (documentID) => {
        dispatch(
            removeCartItem(product)
        );
    }

    const handleIncrementProduct = (product) => {
        dispatch(
            addProduct(product)
        );
    }

    const handleDecrementProduct = (product) => {

        if (quantity > 1) {
            dispatch(
                reduceCartItem(product)
            );
        }
    }

    return (
        <div className="basket__item">
                <div className="basket__image-wrapper">
                    <Link to={`/product/${documentID}`}>
                        <img className="basket__image" src={productImage} alt={productName} />
                    </Link>
                </div>
            <div className="basket__name">
                <h2>{productName}</h2>
            </div>
            <div className="basket__price">
                <h2>£{productPrice}</h2>
            </div>
            <div className="basket__info">
                <div className="basket--left">
                    <label >Size </label>
                    {product[1]}
                </div>
                <div className="basket--right">
                    <label >Quantity: </label>
                    <button className="basket__button" onClick={() => handleDecrementProduct(product)}>
                    <FontAwesomeIcon icon={faChevronLeft} size="1x"/>
                    </button>
                    <span>
                        {quantity}
                    </span>
                    <button className="basket__button" onClick={() => handleIncrementProduct(product)}>
                        <FontAwesomeIcon icon={faChevronRight} size="1x"/>
                    </button>
                </div>

                <div className="basket__remove">
                    <button className="basket__button" onClick={() => handleRemoveProduct(product)}>
                    Remove{/* <FontAwesomeIcon icon={faCaretRight } size="1x"/> */}
                    {/* <span> Remove</span> */}
                    </button>
                </div>
            </div>

            
        </div>
    )
};

export default BasketItemCard;