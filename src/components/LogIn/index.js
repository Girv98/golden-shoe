import React, { Component } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

// Firebase
import {signInWithGoogle} from './../../firebase/utils';

class LogIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }

    render() {
        return (
            <section className="account-wrapper">
                <h1>Log In</h1>
                <div className="account-grid">
                    <form className="box box--sign-in" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <button className="button is--active button--sign-in" onClick={signInWithGoogle}>
                                <span>
                                    <FontAwesomeIcon icon={faGoogle} size="1x"/>
                                </span>
                                <span> Sign in with Google</span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );

    }

    
};

export default LogIn;

