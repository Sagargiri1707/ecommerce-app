import { CART_ACTIONS } from './cart.types'
import { AddItemsToCart} from './cart.utils'
const initialState = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ACTIONS.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case CART_ACTIONS.ADD_CART_ITEM:
            return {
                ...state,
                cartItems:AddItemsToCart(state.cartItems,action.payload)
            }
        default :
            return state
    }
}
export default cartReducer