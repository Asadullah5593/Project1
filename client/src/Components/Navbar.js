import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import nav_logo from '../images/rollsroyce.png'
import shop_logo from '../images/cart-shopping-solid.svg'
export const Navbar = () => {
  return (
    <>
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
  <a class="navbar-brand" href="index.html">
  <img src={nav_logo} alt="Logo" width={30} height={35}/>
  </a>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signUp">Registration</Link>
      </li>
      <li>
        <Link className="nav-link" to={"/Products"}
        > Products
        </Link>
          </li>
          <Link to={"/CheckOut"}>
        <div className="relative w-6 h-10">
            {/* Shopping Basket Icon */}
            <img className='shop-icon-margin' src={shop_logo}
              style={{ height: 53, width: 36}}
              alt="website logo"/>
              {/* Number of items in the basket */}
            {/* <span className="bg-red-500 text-xs w-3 text-center rounded-full absolute top-0 right-0">
              {basket?.length}
            </span> */}
        </div>
          </Link>
    </ul>
  </div>
</nav>
</div>
    </>
  )
  }