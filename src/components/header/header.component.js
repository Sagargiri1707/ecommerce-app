import React from 'react';
import './header.style.scss'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
function Header(props) {
    const { currentUser } = props
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
            
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
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);