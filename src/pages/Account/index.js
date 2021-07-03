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
        <section className="account-wrapper">
            <h1>Account</h1>
            <div className="account-grid" >    
                <div className="box">
                    <div className="content">
                        <h4>Account Name:</h4> <h4>{name}</h4>
                    </div>
                    <div className="content">
                        <h4>Email:</h4> <h4>{email}</h4>
                    </div>
                    <div className="content">
                        <h4>Account Created:</h4> <h4>{date}</h4>
                    </div>
                    <button className="button button--logout is--active" onClick={() => auth.signOut()}>
                        Log Out
                    </button>
                </div>
            </div>
        </section>
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
