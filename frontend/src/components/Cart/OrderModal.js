import React from 'react'
import Modal from 'react-modal/lib/components/Modal'

function OrderModal(props) {
    const {closeModal, order, cartItems} = props
  return (
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
                  {cartItems.reduce((a, p) => {
                    return a + p.price
                  }, 0)} DNT
                </td>
              </tr>
              <tr>
                <td>selected items :</td>
                <td>
                  {cartItems.map((p) => {
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
  )
}

export default OrderModal