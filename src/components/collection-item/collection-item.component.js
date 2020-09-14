import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.style.scss'
const Collection=({ item, addItem })=> {
    const { name,price,imageUrl}=item
    return (
        <div className="collection-item">
            <div
                className="image" style={{
                backgroundImage:`url(${imageUrl})`
                }} />
        
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={()=>addItem(item)}>Add To Cart</CustomButton>
        </div>
    );
}
const mapDispatchtoProps = (dispatch) => ({
    addItem:item=>dispatch(addItemToCart(item))
})

export default connect(null,mapDispatchtoProps)(Collection);