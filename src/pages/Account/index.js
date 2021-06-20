import React from 'react';
import { connect } from 'react-redux';

import { auth } from './../../firebase/utils';
import LogIn from './../../components/LogIn';


const AccountInfo = props => {
    return (
        <>
        <h1 className= "is-size-1">Account</h1>
        <section className="is-fullheight">
            <button className="button" onClick={() => auth.signOut()}>
                Log Out
            </button>
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
                <AccountInfo />
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
