import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.style.scss'
function CartIcon({toggleShowCart}) {
    return (
        <div className="cart-icon" onClick={toggleShowCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
}
const mapDispatchtoProps = dispatch => ({
    toggleShowCart:()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchtoProps)(CartIcon);