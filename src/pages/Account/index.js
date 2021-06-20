import React from 'react';

import LogIn from './../../components/LogIn';
import { auth } from './../../firebase/utils';


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

export default Account;
