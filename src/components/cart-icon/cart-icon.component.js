import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './cart-icon.style.scss'
function CartIcon({toggleShowCart,itemsCount}) {
    return (
        <div className="cart-icon" onClick={toggleShowCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    );
}
const mapDispatchtoProps = dispatch => ({
    toggleShowCart:()=>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemsCount:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchtoProps)(CartIcon);