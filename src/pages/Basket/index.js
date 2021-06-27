import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { auth } from './../../firebase/utils';
import LogIn from './../../components/LogIn';



const BasketInfo = props => {
    return (
        <>
            <section className="account-wrapper pt-5">
                <h1 className= "is-size-1 has-text-centered">Basket</h1>
                <div className="content-wrapper">
                <div className="columns">
                    <div className="column is-two-third">
                        List of Items
                    </div>
                    <div className="column is-one-third">
                        Options, Vouchers and Checkout
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
