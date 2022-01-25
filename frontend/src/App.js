import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { words } from './StaticWords.js'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <main>{words.content}</main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
