import { CART_ACTIONS} from './cart.types'

export const toggleCartHidden = () => ({
    type:  CART_ACTIONS.TOOGLE_CART_HIDDEN,
})

export const addItemToCart = (cartItem) => ({
    type: CART_ACTIONS.ADD_CART_ITEM,
    payload:cartItem
})