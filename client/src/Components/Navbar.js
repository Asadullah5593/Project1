import React from 'react'
import {Link} from 'react-router-dom'
import nav_logo from '../images/rollsroyce.png'
import shop_logo from '../images/cart-shopping-solid.svg'
import {isUserLoggedIn} from "../utils/buttonHide";
import {countCart} from "../utils/cart";

export const Navbar = () => {

    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-light">
                    <a className="navbar-brand" style={{paddingTop: "9px"}} href="/">
                        <img src={nav_logo} alt="Logo" width={30} height={35}/>
                    </a>
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
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
                            <span className='badge' id='lblCartCount'>{countCart()} </span>
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
        </>
    )
}