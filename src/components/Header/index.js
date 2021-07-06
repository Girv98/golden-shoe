import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faShoppingBag, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';


const mapState = (state) => ({
    totalNumCartItems: selectCartItemsCount(state)
});


const Header = props => {
    
    // const [open, setOpen] = useState(false)
    // const burgerToggle = () => {
    //     setOpen(!open);
    // }

    const { totalNumCartItems } = useSelector(mapState);


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
                    <a id="basket__button" className="nav__items__button" href="/basket" title="Basket">
                        <FontAwesomeIcon icon={faShoppingBag} size="2x"/>
                        {totalNumCartItems > 0 && <span className="basket__badge">{totalNumCartItems}</span>}
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
