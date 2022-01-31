import React from 'react'
import '../../css/Filter/Filter.css'
export default function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">filter</h2>
      <div className="number-of-products"> number of produts is 4</div>
      <div className="filter-by-type">
        <span>Filter</span>
        <select value={props.type} className="filter-select" onChange={props.handleType}>
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
        <select value={props.sort} className="filter-select" onChange={props.handleSort}>
          <option value="latest">latest</option>
          <option value="lower">lower</option>
          <option value="highest">highest</option>
          
        </select>
      </div>
    </div>
  )
}
