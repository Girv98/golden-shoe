import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from './../../redux/Cart/cart.actions';


// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const BasketItem = (product) => {
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
        <table className="cart__item" border="0" cellSpacing="0" cellPadding="10">
            <tbody>
                <tr>
                    <td align="center">
                        <img src={productImage} alt={productName} />
                    </td>
                    <td align="center">
                        {productName}
                    </td>
                    <td align="center">
                        {product[1]}
                    </td>
                    <td align="center">
                        <span className="cart__button" onClick={() => handleDecrementProduct(product)}>
                            {"< "}
                        </span>
                        <span>
                            {quantity}
                        </span>
                        <span className="cart__button" onClick={() => handleIncrementProduct(product)}>
                            {" >"}
                        </span>
                    </td>
                    <td align="center">
                        £{productPrice}
                    </td>
                    <td align="center">
                        <span className="cart__button" onClick={() => handleRemoveProduct(product)}>
                            <FontAwesomeIcon icon={faTrashAlt } size="1x"/>

                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default BasketItem;