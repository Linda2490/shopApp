import React, {useState} from 'react'
import '../../css/Cart/Cart.css'
import Form from '../Form/Form'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux'
import { removeFromCart } from '../../store/actions/cart'
function Cart(props) {
  const [showForm, setShowForm] = useState(false)
  const [value, setValue] = useState('')
  const onSubmitHundle = (e) => {
    e.preventDefault()
    console.log(value);
    // const order = {
    //   name: value.name,
    //   email: value.email
    // }
  }
  const hundleChange = (e) => {
      setValue((prevState) => ({...prevState, [e.target.name]: e.target.value}))
  }

  return (
    <Fade left>
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
          <Bounce left>
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
                  props.removeFromCart(item)
                }}
              >
                Remove
              </button>
            </div>
          </div>
           </Bounce>
        ))}
      </div>
      
      {props.cartItems.lengh !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total :{' '}
            {props.cartItems.reduce((acc, p) => {
              return acc + (p.price * p.qty)
            }, 0)}
            dt
          </div>
          <button onClick={() => setShowForm(true)}>select products</button>
        </div>
      )}
       
      <Form showForm={showForm} setShowForm={setShowForm} hundleChange={hundleChange} onSubmitHundle={onSubmitHundle} />

    </div>
    </Fade>
  )
  
}
export default connect((state) => {
  return {
    cartItems: state.cart.cartItems  }
},{removeFromCart})(Cart)