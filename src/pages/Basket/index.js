import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom';

// reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from './../../redux/Cart/cart.selectors';

// components
import LogIn from './../../components/LogIn';
import BasketItem from '../../components/BasketItem';
import BasketItemCard from '../../components/BasketItemCard';

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
                    <div className="basket-columns">
                        <div className="basket">
                        {cartItems.length > 0 ? (
                            <>
                            {cartItems.map((item, pos) => {
                                return (
                                    <BasketItemCard key={pos} {...item} />
                                )
                            })}
                            </>

                            ) : (
                                <p> 
                                    There are no items in your basket.
                                </p>
                            )}
                        </div>

                        <div className="info">
                            {/* Options, Vouchers and Checkout */}

                            {cartItems.length > 0 && (

                                <div className="summary">
                                    <h3>Total: £{total}</h3>
                                </div>
                            )}
                            <button className="button is--active" onClick={() => history.push("/")}>Continue Shopping</button>
                            <button className={`button ${cartItems.length > 0 ? "is--active" : "is--not-active"}`} disabled={cartItems.length < 1}>Checkout</button>
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
