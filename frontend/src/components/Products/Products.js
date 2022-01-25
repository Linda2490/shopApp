import React from 'react'
import '../../css/Products/Products.css'
export default function Products(props) {
  return <div className="products-wrapper">
  {props.products.map(product => (
    <div className="product-item" key={product.id}>
        
            <img src={product.image} alt={product.title}/>
            <div className="product-description">
              <p>{product.title}</p>
              <span>{product.price}</span>
            
            </div>
            <button> add to cart </button>
        
    
    
    </div>

  ))}
  
  </div>
}
