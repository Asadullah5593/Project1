import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Navbar} from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import './index.css'
import Products from './Components/Products'
import CheckOut from "./Components/CheckOut"
import ProdDetails from "./Components/ProdDetails";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => {
    return (
        <>
            <ToastContainer/>
            <Navbar/>

            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/checkout" element={<CheckOut/>}/>
                <Route path="/product-details/:id" element={<ProdDetails/>}/>
            </Routes>
        </>
    )
}

export default App