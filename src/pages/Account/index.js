import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { auth } from './../../firebase/utils';
import LogIn from './../../components/LogIn';


const AccountInfo = props => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
        window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
    }, [isMobile]);

    const { currentUser } = props;
    const name = currentUser.displayName;
    const email = currentUser.email;
    const date = currentUser.createdDate && (currentUser.createdDate).toDate().toDateString();

    return (
        <>
        <section className="account-wrapper pt-5">
            <h1 className= "is-size-1 has-text-centered">Account</h1>
            <div className="wrapper">    
                <div className={`column ${isMobile ? "is-half" : "is-one-third"}`}>
                    <div className="box">
                        <div className="content">
                            <h6>Account Name:</h6> <h6>{name}</h6>
                        </div>
                        <div className="content">
                            <h6>Email:</h6> <h6>{email}</h6>
                        </div>
                        <div className="content">
                            <h6>Account Created:</h6> <h6>{date}</h6>
                        </div>
                        <button className="button button--logout is--active" onClick={() => auth.signOut()}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

const Account = props => {

    const { currentUser } = props;

    console.log(currentUser);

    return (
        <>
            {currentUser && (
                <AccountInfo currentUser={currentUser}/>
            )}

            {!currentUser && (
                <LogIn />
            )}
        </>
    );
};

Account.defaultProps = {
    currentUser: null
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Account);
