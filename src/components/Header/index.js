import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faShoppingBag} from '@fortawesome/free-solid-svg-icons';



function Header() {
    const logoImage = "https://bulma.io/images/bulma-logo.png";
    
    const [open, setOpen] = useState(false)
    const burgerToggle = () => {
        setOpen(!open);
    }


    return (
        <nav className = "navbar is-fixed-top">
            <div className = "navbar-brand">
                <a className="navbar-item" href="/">
                    {/* <img src={logoImage} width="112" height="28" alt=""/> */}
                    <h1 className="title is-5"> Golden Shoe </h1>
                </a>

                <div className={`navbar-burger ${open ? "is-active" : ""}`} onClick={burgerToggle}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id = "navbarBasicExample" className = {`navbar-menu ${open ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <div className="navbar-item">
                        Products
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <div className="navbar-link">
                        More
                        </div>
                        <div className="navbar-dropdown">
                            <div className="navbar-item">
                                About
                            </div>
                            <div className="navbar-item">
                                Contact
                            </div>
                        </div>
                    </div>

                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-white">
                                <FontAwesomeIcon icon={faUser} size="2x"/>
                            </button>
                            <button className="button is-white">
                                <FontAwesomeIcon icon={faShoppingBag} size="2x"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
