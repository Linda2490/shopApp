import { FETCH_PRODUCTS, FILTER_TYPE, FILTER_SORT } from './types'

export const fetchProducts = () => {
  return (dispatch) => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        })
      })
  }
}

export const filterByType = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products]
    let newProducts = productsClone.filter((p) => p.type.indexOf(value) !== -1)
    dispatch({
      type: FILTER_TYPE,
      data: {
        type: value,
        products: value === 'all' ? products : newProducts,
      },
    })
  }
}

export const filterBySort = (products, value) => {
    return (dispatch) => {
        let productsClone = [...products]
        let newProducts = productsClone.sort(function (a, b) {
      if (value === 'lower') {
        return a.price - b.price
      } else if (value === 'highest') {
        return b.price - a.price
      } else if (value === 'latest') {
        return a.id < b.id ? 1 : -1
      } else {
        return a.id > b.id ? 1 : -1
      }
    })
        dispatch({
            type: FILTER_SORT,
            data: {
                sort: value,
                products: newProducts
            }
        })
    }
}