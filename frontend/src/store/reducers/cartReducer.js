import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'

export const cartReducer = (
  state = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  },
  action,
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.data.cartItems }
    case REMOVE_FROM_CART:
      return { cartItems: action.data.cartItems }
    default:
      return state
  }
}
