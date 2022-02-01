import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import { words } from './StaticWords.js'
import './App.css'
import Cart from './components/Cart/Cart'
import Filter from './components/Filter/Filter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import data from './data.json'
function App() {
  const [products, setProducts] = useState(data)
  const [type, setType] = useState('')
  const [sort, setSort] = useState('')
  const [cartItems, setcartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
  const handleType = (e) => {
    setType(e.target.value)

    if (e.target.value === 'all') {
      setProducts(data)
    } else {
      let productsClone = data
      let newProducts = productsClone.filter(
        (p) => p.type.indexOf(e.target.value) !== -1,
      )

      setProducts(newProducts)
    }
  }
  const handleSort = (e) => {
    let order = e.target.value
    setSort(order)
    let productsClone = data
    let newProducts = productsClone.sort(function (a, b) {
      if (order === 'lower') {
        return a.price - b.price
      } else if (order === 'highest') {
        return b.price - a.price
      } else if (order === 'latest') {
        return a.id < b.id ? 1 : -1
      } else {
        return a.id > b.id ? 1 : -1
      }
    })
    setProducts(newProducts)
  }
  
  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    cartItemsClone.forEach(p => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    })
    if (!isProductExist) {
      cartItemsClone.push({...product, qty : 1})
    }
    setcartItems(cartItemsClone)
  }
  
  const removeProduct = (product) => {
    const cartItemsClone = [...cartItems];
    setcartItems(cartItemsClone.filter(p => p.id !== product.id))
  }
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems]);
  
  
  return (
    <Router>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart}></Products>
            <Filter
              type={type}
              sort={sort}
              handleSort={handleSort}
              handleType={handleType}
              productsNumber={products.length}
            />
          </div>
          <Cart cartItems={cartItems} removeProduct={removeProduct}/>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
