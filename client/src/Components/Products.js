import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {addToCart} from "../utils/cart";
import {isUserLoggedIn} from "../utils/buttonHide";
import {useEffect, useState} from 'react';
import {getAllProducts} from "../ApiHelpers/ProductApiHelper";
import {toast} from "react-toastify";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        getAllProducts().then((res) => {
            const {data} = res;
            if (data.success === true) {
                setProducts(data.products);
                setFetching(false);
            } else {
                toast.error(data.error)
            }
        }).catch((e) => {
            toast.error(e.message)
        })
        ;
    }, []);

    if (isFetching) {
        return <div>...Data Loading.....</div>;
    }


    return (
        <div><h1 className="title">Our Main Products</h1>
            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    {
                        products.map((product) => (
                            <div className="col-md-4 mt-2">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-img-actions">
                                            <a href={`product-details/${product._id}`}> <img src={product.image_url}
                                                                                             className="card-img img-fluid"
                                                                                             width="96" height="35"
                                                                                             alt="product1"/></a>
                                        </div>
                                    </div>
                                    <div className="card-body bg-light text-center">
                                        <div className="mb-2">
                                            <h6 className="font-weight-semibold mb-2">
                                                <a href="#" className="text-default mb-2">{product.brand_name}</a>
                                            </h6>
                                        </div>
                                        <h3 className="mb-0 font-weight-semibold">${product.price}</h3>

                                        {/*<div>*/}
                                        {/*    <FontAwesomeIcon className="star" icon={faStar}/>*/}
                                        {/*    <FontAwesomeIcon className="star" icon={faStar}/>*/}
                                        {/*    <FontAwesomeIcon className="star" icon={faStar}/>*/}
                                        {/*    <FontAwesomeIcon className="star" icon={faStar}/>*/}
                                        {/*    <FontAwesomeIcon className="star" icon={faStarHalf}/>*/}
                                        {/*</div>*/}
                                        <div className="text-muted mb-3">30 reviews</div>
                                        <div><a className="prod-detail-btn" href={`product-details/${product._id}`}>More Details</a></div>
                                        {isUserLoggedIn() ? (
                                            <button type="button" className="bg-cart"
                                                    onClick={event => addToCart(product._id)}>
                                                <FontAwesomeIcon icon={faCartPlus} mr-2/> Add to cart
                                            </button>
                                        ) : ""}
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Products;
