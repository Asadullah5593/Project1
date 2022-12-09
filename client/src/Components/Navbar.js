import React from 'react'
import {Link} from 'react-router-dom'
import nav_logo from '../images/rollsroyce.png'
import shop_logo from '../images/cart-shopping-solid.svg'
import {isUserLoggedIn} from "../utils/buttonHide";


export const Navbar = () => {
    return (
        <>
          <div class="container-fluid">  
<nav class="navbar navbar-light">
<a className="navbar-brand" href="/">
                <img src={nav_logo} alt="Logo" width={30} height={35}/>
            </a>
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Shopping</a>
    </div>
    <ul class="nav navbar-nav">
    <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/Products">Products</a></li>
    </ul>
    
    <div className="navbar-right relative w-6 h-10">
                        <Link to={"/CheckOut"}>
                            <img src={shop_logo}
                                 className="nav-checkout"
                                 alt="website logo"/>
                        </Link>
                        {isUserLoggedIn() ? "" : (
                        <ul className="nav navbar-right nav-ul-signin">
                            <li className="nav-item" id="nav-li-signin">
                                <a href="/login">SignIn</a>

                            </li>
                            <li className="nav-item" id="nav-li-signup">
                               <a href="/signup"> SignUp</a>
                            </li>
                        </ul>
                             )}
                    </div>
    
  </div>
</nav>
</div>

                        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <a className="navbar-brand" href="index.html">
                            <img src={nav_logo} alt="Logo" width={30} height={35}/>
                        </a> */}
                    {/* </Link> */}
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to={"/Products"}> Products</Link>
                            </li>
                        </ul>
                    </div> */}
                    {/*  */}
                {/* </nav> */}

        </>
    )
}