import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faShoppingBag} from '@fortawesome/free-solid-svg-icons';


function Header() {
    
    const [open, setOpen] = useState(false)
    const burgerToggle = () => {
        setOpen(!open);
    }


    return (
        <section className="section">
        <nav className = "navbar is-fixed-top has-centered-menu">
            <div className = "navbar-brand">
                <a className="navbar-item" href="/">
                    <h1 className="title is-5"> Golden Shoe </h1>
                </a>

                <div className={`navbar-burger ${open ? "is-active" : ""}`} onClick={burgerToggle}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id = "navbarBasicExample" className = {`navbar-menu  ${open ? "is-active" : ""}`}>
                <div className="navbar-start">
                    {/* <div className="navbar-item">
                        Products
                    </div>

                    <div className="navbar-item">
                        About
                    </div>
                    <div className="navbar-item">
                        Contact
                    </div> */}
                    
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-white" href="/account" title="Account">
                                <FontAwesomeIcon icon={faUser} size="2x"/>
                            </a>
                            <a className="button is-white" href="/basket" title="Basket">
                                <FontAwesomeIcon icon={faShoppingBag} size="2x"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </section>
    );
};

export default Header;
