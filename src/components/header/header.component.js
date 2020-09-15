import React from 'react';
import './header.style.scss'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
function Header(props) {
    const { currentUser,hidden } = props
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
            {
                !hidden ?
            
                    <CartDropdown />
                    : <></>    
            }
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={()=>auth.signOut()}> SIGNOUT</div>
                        : <Link className="option" to="/signin"> SIGN IN</Link>
                }
                <CartIcon/>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);