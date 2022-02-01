import React from 'react'
import '../../css/Cart/Cart.css'
export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {' '}
        {props.cartItems.length === 0 ? (
          'empty cart'
        ) : (
          <p>There are {props.cartItems.length} in cart </p>
        )}{' '}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-info">
              <div>
                <p>title: {item.title}</p>
                <p>quantity: {item.qty}</p>
                <p>price: {item.price}dt</p>
              </div>

              <button
                onClick={() => {
                  props.removeProduct(item)
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {props.cartItems.lengh !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total :{' '}
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price
            }, 0)}
            dt
          </div>
          <button>select products</button>
        </div>
      )}
    </div>
  )
}
