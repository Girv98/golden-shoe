import React from 'react';

import LogIn from './../../components/LogIn'


const LoginPage = props => {
    return <LogIn />;
}

const AccountInfo = props => {
    return <div>Account</div>;
}

const Greet = props => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <AccountInfo />;
    }
    return <LoginPage />;
}


const Account = props => {
    return (
        <Greet isLoggedIn={false}/>
    );
};

export default Account;
