import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


import './cart-dropdown.style.scss'
function CartDropdown({cartItems,history,cartHidden}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.length>=1?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item}/>
                    )) :
                        <p className="empty-message">
                         Your cart is empty
                        </p>
            }    
            </div>
            <CustomButton onClick={() => {
                cartHidden();
                history.push('/checkout');

            }}>
                Go to Checkout
            </CustomButton>
        </div>
    );
}
const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
})

const  mapDispatchToProps=(dispatch)=>( {
    cartHidden:()=>dispatch(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)( CartDropdown));