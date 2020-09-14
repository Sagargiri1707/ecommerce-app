export const AddItemsToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem=>cartItem.id===cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartitem =>
            cartitem.id === cartItemToAdd.id
                ?
                { ...cartitem, quantity: cartitem.quantity + 1 }
                :
                cartitem
        )
    }

    return [...cartItems,{...cartItemToAdd,quantity:1}]
}