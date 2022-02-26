import React from 'react'
import '../../css/Filter/Filter.css'
import Flip from 'react-reveal/Flip'
import { connect } from 'react-redux'
import {filterBySort, filterByType} from '../../store/actions/products'
function Filter(props) {
  return (
    <Flip top>
    { props.filtredProducts && 
      <div className="filter-wrapper">
        <h2 className="filter-title">filter</h2>
        <div className="number-of-products">
          {' '}
          number of products is {props.filtredProducts.length}
        </div>
        <div className="filter-by-type">
          <span>Filter</span>
          <select
            value={props.type}
            className="filter-select"
            onChange={(e) => props.filterByType(props.products, e.target.value)}
          >
            <option value="all">all</option>
            <option value="sabba">sabba</option>
            <option value="bouteille">bouteille</option>
            <option value="simple">simple</option>
            <option value="bil-ka3ba">bil-ka3ba</option>
            <option value="pack">pack</option>
            <option value="emballage">emballage</option>
            <option value="zit-zitouna">zit-zitouna</option>
          </select>
        </div>
        <div className="filter-by-type">
          <span>Order</span>
          <select
            value={props.sort}
            className="filter-select"
            onChange={(e) => props.filterBySort(props.products, e.target.value)}
          >
            <option value="latest">latest</option>
            <option value="lower">lower</option>
            <option value="highest">highest</option>
          </select>
        </div>
      </div>}
    </Flip>
  )
}

export default connect((state) => {
  return {
    sort: state.products.sort,
    type: state.products.type,
    products: state.products.products,
    filtredProducts: state.products.filtredProducts,
  }
}, {filterByType, filterBySort})(Filter)
