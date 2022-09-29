import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import product1pic from "../images/product1.png"
import product2pic from "../images/product2.png"
import product3pic from "../images/product3.png"
import product4pic from "../images/product4.jpg"
import product5pic from "../images/product5.png"
import product6pic from "../images/product6.png"
import {addToCart} from "../utils/cart";


const Products = () => {
    return (
        <div><h1 className="title">Our Main Products</h1>
<div className="container d-flex justify-content-center mt-50 mb-50">
    <div className="row">
        <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions">
                        <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>                         
                    </div>
                </div>
            <div className="card-body bg-light text-center">
                <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                        <a href="#" className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
                    </h6>
                </div>
                    <h3 className="mb-0 font-weight-semibold">$25.89</h3>
    
                        <div>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStarHalf} />
                        </div>
                <div className="text-muted mb-3">30 reviews</div>
                    <button type="button" className="bg-cart" onClick={event => addToCart("123")}>
                        <FontAwesomeIcon icon={faCartPlus} mr-2/> Add to cart</button>
                    </div>
            </div>           
               </div> 
               <div className="col-md-4 mt-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-actions">                    
                                <img src={product2pic} className="card-img img-fluid" width="96" height="350" alt="product2"/>
                            </div>
                        </div>
    
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2">
                            <a href="#" className="text-default mb-2">Vivo S-88 with 4 Gb Ram</a>
                        </h6>
                            </div>
                                <h3 className="mb-0 font-weight-semibold">$34.97</h3>
                                <div>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStarHalf}/>
                                </div>

                                <div className="text-muted mb-3">32 reviews</div>
                                <button type="button" className="bg-cart" onClick={event => addToCart("456")}>
                                    <FontAwesomeIcon icon={faCartPlus} mr-2/> Add
                                    to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-img-actions">
                                    <img src={product3pic} className="card-img img-fluid" width="96" height="350"
                                         alt="product3"/>
                                </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2">
                                        <a href="#" className="text-default mb-2">Vivo S-81 with 8 Gb Ram</a>
                                    </h6>
                                </div>
                                <h3 className="mb-0 font-weight-semibold">$65.12</h3>
                                <div>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                </div>
                                <div className="text-muted mb-3">101 reviews</div>
                                <button type="button" className="bg-cart" onClick={event => addToCart("789")}>
                                    <FontAwesomeIcon icon={faCartPlus} mr-2/> Add
                                    to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-img-actions">
                                    <img src={product4pic} className="card-img img-fluid" width="96" height="350"
                                         alt="product4"/>
                                </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2">
                                        <a href="#" className="text-default mb-2">Vivo V-21s with 6 GB Ram</a>
                                    </h6>
                                </div>
                                <h3 className="mb-0 font-weight-semibold">$28.09</h3>
                                <div>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStarHalf}/>
                                </div>
                                <div className="text-muted mb-3">56 reviews</div>
                                <button type="button" className="bg-cart" onClick={event => addToCart("1011")}>
                                    <FontAwesomeIcon icon={faCartPlus} mr-2/> Add
                                    to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-img-actions">
                                    <img src={product5pic} className="card-img img-fluid" width="96" height="350"
                                         alt="product5"/>
                                </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2">
                                        <a href="#" className="text-default mb-2">Vivo X-88 With 8 + 4 GB Ram</a>
                                    </h6>
                                </div>
                                <h3 className="mb-0 font-weight-semibold">$45.88</h3>
                                <div>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                </div>
                                <div className="text-muted mb-3">63 reviews</div>
                                <button type="button" className="bg-cart" onClick={event => addToCart("1213")}>
                                    <FontAwesomeIcon icon={faCartPlus} mr-2/> Add
                                    to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-img-actions">
                                    <img src={product6pic} className="card-img img-fluid" width="96" height="350"
                                         alt="product6"/>
                                </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2">
                                        <a href="#" className="text-default mb-2">Vivo V-43 with 8GB Ram</a>
                                    </h6>
                                </div>
                                <h3 className="mb-0 font-weight-semibold">$30.10</h3>
                                <div>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                    <FontAwesomeIcon className="star" icon={faStar}/>
                                </div>
                                <div className="text-muted mb-3">49 reviews</div>
                                <button type="button" className="bg-cart" onClick={event => addToCart("1415")}>
                                    <FontAwesomeIcon icon={faCartPlus} mr-2/> Add
                                    to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;
