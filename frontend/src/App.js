import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <main>content</main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
