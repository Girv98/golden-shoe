import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

import {signInWithGoogle} from './../../firebase/utils';

class LogIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="is-fullheight">
                
                <div className="columns is-centered">
                    <div className="column has-text-centered">
                        <h3 className=" is-size-3">Log In</h3>
                    </div>
                </div>
                
                <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form className="box" onSubmit={this.handleSubmit}>
                            <div className="field">
                                <button className="button is-fullwidth" onClick={signInWithGoogle}>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGoogle} size="1x"/>
                                    </span>
                                    <span>Sign in with Google</span>
                                </button>
                            </div>
                        </form>
    
                    </div>
                </div>
            </div>
        );

    }

    
};

export default LogIn;

