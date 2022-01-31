import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import { words } from './StaticWords.js'
import './App.css'
import Filter from './components/Filter/Filter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import data from './data.json'
function App() {
 const [products, setProducts] = useState(data)
 const [type, setType] = useState('')
 const [sort, setSort] = useState('')
 const handleType = (e) => {
   setType(e.target.value);
   
  if ((e.target.value) === 'all') {setProducts(data);} else
   {let productsClone = (data);
   let newProducts = productsClone.filter(p => p.type.indexOf(e.target.value) !== -1);
   
   setProducts(newProducts);}
   
 }
 const handleSort = (e) => {
   let order = e.target.value;
   setSort(order);
   let productsClone = (data);
   let newProducts = productsClone.sort( function(a,b) {
     if (order === "lower") {
      return a.price - b.price
     } else if (order === "highest") {
      return b.price - a.price
     } else if(order === "latest"){
      return a.id < b.id ? 1 : -1
    } else {
     return a.id > b.id ? 1 : -1
    }
   });
    setProducts(newProducts);
 }
 
  return (
    <Router>
      <div className="layout">
        <Header />
        <main>
          <div className='wrapper'>
           <Products products={products}></Products>
           <Filter type={type} sort={sort} handleSort={handleSort} handleType={handleType} />
          
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
