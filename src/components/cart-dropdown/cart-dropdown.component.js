import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


import './cart-dropdown.style.scss'
function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item}/>
                    ))
            }    
            </div>
            <CustomButton >Go to Checkout</CustomButton>
        </div>
    );
}
const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems:cartItems
})
export default connect(mapStateToProps)( CartDropdown);