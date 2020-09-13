import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss'
function CartDropdown(props) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton >Go to Checkout</CustomButton>
        </div>
    );
}

export default CartDropdown;