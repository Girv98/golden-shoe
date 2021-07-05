import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faShoppingBag, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';


const Header = props => {
    
    // const [open, setOpen] = useState(false)
    // const burgerToggle = () => {
    //     setOpen(!open);
    // }


    return (
        <div className="wrapper--nav">
            <nav className = "nav is-fixed-top ">
                <div className = "nav__brand">
                    <a href="/" title="Home">
                        <h3> Golden Shoe </h3>
                    </a>
                </div>

                <div className = "nav__items" >
                    <a className="nav__items__button" href="/account" title="Account">
                        <FontAwesomeIcon icon={faUser} size="2x"/>
                    </a>
                    <a className="nav__items__button" href="/basket" title="Basket">
                        <FontAwesomeIcon icon={faShoppingBag} size="2x"/>
                    </a>
                    <button className="nav__items__button" title="Change colour mode" onClick={() => props.setIsDark(!props.isDark)}>
                        <FontAwesomeIcon icon={props.isDark ? faSun : faMoon } size="2x"/>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
