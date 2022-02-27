import { ADD_TO_CART, REMOVE_FROM_CART } from "./types"

export const addToCart = (product) => {
  return (dispatch, getstate) => {
      let cartItems = getstate().cart.cartItems
    const cartItemsClone = [...cartItems]
    var isProductExist = false
    cartItemsClone.forEach((p) => {
      if (p._id === product._id) {
        p.qty++
        isProductExist = true
      }
    })
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 })
    }
    dispatch(
        {type: ADD_TO_CART,
        data : {
            cartItems: cartItemsClone
        }}
    )
    localStorage.setItem('cartItems', JSON.stringify(cartItemsClone))
  }
}

export const removeFromCart = (product) => {
    return (dispatch, getstate) => {
        const cartItems = getstate().cart.cartItems
        
    const cartItemsClone = [...cartItems]
    const updateCart = cartItemsClone.filter(p => p._id !== product._id)
     dispatch({
         type: REMOVE_FROM_CART,
         data: {
             cartItems: updateCart
         }
     })
      localStorage.setItem('cartItems', JSON.stringify(updateCart))
    }
}
