import { FETCH_PRODUCTS, FILTER_SORT, FILTER_TYPE } from '../actions/types'

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.data, filtredProducts: action.data }
    case FILTER_TYPE: 
      return {
        ...state,
        type: action.data.type,
        filtredProducts: action.data.products
      }  
    case FILTER_SORT: 
      return {
        ...state,
        sort: action.data.sort,
        filtredProducts: action.data.products
      }  
    default:
      return state
  }
}
