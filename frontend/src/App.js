import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import { words } from './StaticWords.js'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import data from './data.json'
function App() {
 const [products, useProducts] = useState(data)
 
  return (
    <Router>
      <div className="layout">
        <Header />
        <main>
          <div className='wrapper'>
           <Products products={products}></Products>
           <div className='filter-wrapper'>fil</div>
          
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
