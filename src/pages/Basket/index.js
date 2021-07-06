import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from './../../redux/Cart/cart.selectors';

// components
import LogIn from './../../components/LogIn';
import BasketItem from '../../components/BasketItem';

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const BasketInfo = props => {

    const { cartItems, total } = useSelector(mapState);
    const history = useHistory();

    return (
        <>
            <section className="account-wrapper">
                <h1 className= "is-size-1 has-text-centered">Basket</h1>
                <div className="content-wrapper">
                <div className="columns">
                    <div className="cart">
                        {cartItems.length > 0 ? (
                            <table border="0" cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td>
                                        <table className="cart__header" border="0" cellPadding="10" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <th align="center">Product</th>
                                                    <th align="center">Name</th>
                                                    <th align="center">Size</th>
                                                    <th align="center">Quantity</th>
                                                    <th align="center">Price</th>
                                                    <th align="center">Remove</th>
                                                </tr>    
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <table border="0" cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                {cartItems.map((item, pos) => {
                                                    return (
                                                        <tr key={pos}>
                                                            <td>
                                                                <BasketItem {...item} />
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <table align="right" border="0" cellPadding="10" cellSpacing="0">
                                            <tbody>
                                                <tr align="left">
                                                    <td>
                                                        <h3>Total: £{total}</h3>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                        ) : (
                            <p> 
                                There are no items in your basket.
                            </p>
                        )}
                    </div>




                    <div className="column">
                        {/* Options, Vouchers and Checkout */}

                        <button className="button is--active" onClick={() => history.push("/")}>Continue Shopping</button>
                        <button className="button is--active">Checkout</button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}


const Basket = props => {

    const { currentUser } = props;

    return (
        <>
            {currentUser && (
                <BasketInfo currentUser={currentUser}/>
            )}

            {!currentUser && (
                <LogIn />
            )}
        </>
    );
};


Basket.defaultProps = {
    currentUser: null
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});


export default connect(mapStateToProps, null)(Basket);
