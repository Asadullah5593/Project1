import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import nav_logo from '../images/rollsroyce.png'
import shop_logo from '../images/cart-shopping-solid.svg'


export const Navbar = () => {
    return (
        <>
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <a className="navbar-brand" href="index.html">
                            <img src={nav_logo} alt="Logo" width={30} height={35}/>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
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
                            <li>
                                <Link className="nav-link" to={"/Products"}
                                > Products
                                </Link>
                            </li>
                            {/*</Link>*/}
                        </ul>
                    </div>
                    <div className="relative w-6 h-10" style={{marginRight: "100px"}}>
                        <Link to={"/CheckOut"}>
                            <img src={shop_logo}
                                 className="nav-checkout"
                                 alt="website logo"/>
                        </Link>
                        <ul className="nav-ul-signin">
                            <li className="nav-item" id="nav-li-signin">
                                <a href="/login">SignIn</a>

                            </li>
                            <li className="nav-item" id="nav-li-signup">
                               <a href="/signup"> SignUp</a>
                            </li>
                        </ul>
                        {/* Number of items in the basket */}
                        {/* <span className="bg-red-500 text-xs w-3 text-center rounded-full absolute top-0 right-0">
              {basket?.length}
            </span> */}
                    </div>
                </nav>
            </div>
        </>
    )
}