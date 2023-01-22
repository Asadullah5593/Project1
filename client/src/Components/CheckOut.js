import {React} from "react";
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {addToCart, removeFromCart, clearCart, removeUserSession} from "../utils/cart";
import {placeNewOrder} from "../ApiHelpers/OrderApiHelper";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const CheckOut = () => {

    const [products, setProducts] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [isFetching, setFetching] = useState(false);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setFetching(true);
        let cartProducts = [];
        let totalPrice = 0;
        const localStore = Object.values(localStorage);
        localStore.forEach((entry) => {
            if (entry.includes("product_id")) {
                entry = JSON.parse(entry);
                cartProducts.push(entry);
                totalPrice += (entry.price * entry.quantity);
            }
        });
        setProducts(cartProducts);
        setFetching(false);
        setIsUpdated(false);
        setTotal(totalPrice);
    }, [isUpdated]);

    const addProductToCart = (product) => {
        addToCart(product);
        setIsUpdated(true);
    };

    const removeProductFromCart = (product) => {
        removeFromCart(product);
        setIsUpdated(true);
    };

    const placeOrder = (e) => {
        e.preventDefault();
        const user_id = localStorage.getItem("userId");
        const finalProducts = products.map((product) => {
            delete product["product_name"];
            delete product["product_brand"];
            delete product["product_image"];
            return product;
        });

        const data = {
            "user_id": user_id,
            "products": finalProducts
        };

        placeNewOrder(data).then((res) => {
            if (res.data.status === true) {
                clearCart();
                toast.success("Your order has been placed successfully!")
            } else {
                toast.error(data.error);
            }
        }).catch((e) => {
            if (e.response.data === "Unauthorized") {
                toast.error("Your session has been expired! Please Login to continue.");
                removeUserSession();
                navigate("/login");
            } else {
                toast.error(e.response.data);
            }
        })
    }

    if (isFetching) {
        return <div>...Data Loading.....</div>;
    }

    return (
        <div className="container wrapper">
            <div className="row cart-head">
                <div className="container">
                    <div className="row">
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="row cart-body">
                <form className="form-horizontal" method="post" onSubmit={event => placeOrder(event)}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                Review Order
                            </div>
                            {products.length > 0 ? (
                                <div className="panel-body">
                                    {products.map((product) =>
                                        <>
                                            <div className="form-group">
                                                <div className="col-sm-3 col-xs-3">
                                                    <img src={product.product_image} width="100%" alt="orderpic"/>
                                                </div>
                                                <div className="col-sm-6 col-xs-6">
                                                    <div className="col-xs-12">{product.product_name}</div>
                                                    <div className="col-xs-12">
                                                        <small>Quantity:
                                                            <button type="button"
                                                                    onClick={event => removeProductFromCart(product)}>
                                                                <FontAwesomeIcon
                                                                    icon={faMinus}/>
                                                            </button>
                                                            <span className="cart-item-font"> {product.quantity} </span>
                                                            <button type="button"
                                                                    onClick={event => addProductToCart(product)}>
                                                                <FontAwesomeIcon
                                                                    icon={faPlus}/></button>

                                                        </small></div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 text-right">
                                                    <h6><span>$</span>{product.price * product.quantity}</h6>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <hr/>
                                            </div>
                                        </>
                                    )}
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <strong>Subtotal</strong>
                                            <div className="pull-right"><span>$</span><span>{total}</span></div>
                                        </div>
                                        <div className="col-xs-12">
                                            <small>Shipping</small>
                                            <div className="pull-right"><span>$</span><span>100</span></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <hr/>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <strong>Order Total</strong>
                                            <div className="pull-right"><span>$</span><span>{total + 100}</span></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="panel-body">
                                    <h2 style={{margin: 'auto', width: "50%"}}>Your Cart is Empty!</h2>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                        <div className="panel panel-info">
                            <div className="panel-heading">Address</div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <h4>Shipping Address</h4>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Country:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="country" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6 col-xs-12">
                                        <strong>First Name:</strong>
                                        <input type="text" name="first_name" className="form-control" required/>
                                    </div>
                                    <div className="span1"></div>
                                    <div className="col-md-6 col-xs-12">
                                        <strong>Last Name:</strong>
                                        <input type="text" name="last_name" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Address:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" name="address" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>City:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" name="city" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>State:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" name="state" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" name="zip_code" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Phone Number:</strong></div>
                                    <div className="col-md-12"><input type="text" name="phone_number"
                                                                      className="form-control" required/></div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Email Address:</strong></div>
                                    <div className="col-md-12"><input type="text" name="email_address"
                                                                      className="form-control" required/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <button className="orderbtn" type="submit">Place Order</button>
                    </div>
                </form>

            </div>

        </div>
    )
}
export default CheckOut;