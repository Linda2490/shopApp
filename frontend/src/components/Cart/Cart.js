import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import Form from '../Form/Form'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux'
import { removeFromCart } from '../../store/actions/cart'
import Modal from 'react-modal/lib/components/Modal'
function Cart(props) {
  const [showForm, setShowForm] = useState(false)
  const [order, setOrder] = useState(false)
  const [value, setValue] = useState('')
  const closeModal = () => {
    setOrder(false)
  }
  const onSubmitHundle = (e) => {
    e.preventDefault()

    const order = {
      name: value.name,
      email: value.email,
    }
    setOrder(order)
  }
  const hundleChange = (e) => {
    setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  return (
    <Fade left>
      <div className="cart-wrapper">
        <div className="cart-title">
          {' '}
          {props.cartItems.length === 0 ? (
            'empty cart'
          ) : (
            <p>There are {props.cartItems.length} products in cart </p>
          )}{' '}
        </div>
        <Modal isOpen={order} onRequestClose={closeModal}>
          <div className="order-info">
          <span className='close-icon' onClick={closeModal}> &times; </span>
            <p className="alert-success">order done successfully</p>
            <table>
              <tr>
                <td>Name:</td>
                <td>{order.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{order.email}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>
                  {props.cartItems.reduce((a, p) => {
                    return a + p.price
                  }, 0)} DNT
                </td>
              </tr>
              <tr>
                <td>selected items :</td>
                <td>
                  {props.cartItems.map((p) => {
                    return (
                      <div className="cart-data">
                        <p>product's title : {p.title} </p>
                        <p>product's quantity : {p.qty} </p>
                      </div>
                    )
                  })}
                </td>
              </tr>
            </table>
          </div>
        </Modal>
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
                return acc + p.price * p.qty
              }, 0)}
              dt
            </div>
            <button onClick={() => setShowForm(true)}>select products</button>
          </div>
        )}

        <Form
          showForm={showForm}
          setShowForm={setShowForm}
          hundleChange={hundleChange}
          onSubmitHundle={onSubmitHundle}
        />
      </div>
    </Fade>
  )
}
export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
    }
  },
  { removeFromCart },
)(Cart)
