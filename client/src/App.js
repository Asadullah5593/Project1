import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import './index.css'
import Products from './Components/Products'
import CheckOut from "./Components/CheckOut"
const App = () => {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
    </>
  )
}

export default App