import React, {useState} from 'react'
import '../../css/Products/Products.css'
import Fade from 'react-reveal/Fade'
import ProductModal from './ProductModal.js'
export default function Products(props) {
  const [product, setProduct] = useState("")
  const openModal = (product) => {
    setProduct(product)
  }
  const closeModal = () => {
    setProduct(false)
  }
  return (
  <Fade left cascade>
  
  <div className="products-wrapper">
  {props.products.map(product => (
    <div className="product-item" key={product.id}>
            
            <img src={product.image} alt={product.title} onClick={() => openModal(product)}/>
           
            <div className="product-description">
              <p>{product.title}</p>
              <span>{product.price}dt</span>
            
            </div>
            <button onClick={() => {props.addToCart(product)}}> add to cart </button>
        
    
    
    </div>

  ))}

  <ProductModal product={product} closeModal={closeModal}></ProductModal>
  </div>
  </Fade>
  )}
