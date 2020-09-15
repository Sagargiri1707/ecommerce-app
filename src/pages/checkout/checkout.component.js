import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckOut from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import './checkout.style.scss'
function Checkout({cartItems,total}) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckOut key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
}

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)( Checkout);