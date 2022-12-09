import {React} from "react";
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {addToCart, removeFromCart} from "../utils/cart";
import {placeNewOrder} from "../ApiHelpers/OrderApiHelper";
import {toast} from "react-toastify";

const CheckOut = () => {

    const [products, setProducts] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [isFetching, setFetching] = useState(false);
    const [total, setTotal] = useState(0);

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

    const placeOrder = () => {
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
            console.log(res);
            // if (data.status === true) {
            //     setFetching(false);
            // } else {
            //     toast.error(data.error)
            // }
        }).catch((e) => {
            toast.error(e.message)
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
                <form className="form-horizontal" method="post" onSubmit={event => event.preventDefault()}>
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
                                                    <img src={product.product_image} width="100%" alt="pic1"/>
                                                </div>
                                                <div className="col-sm-6 col-xs-6">
                                                    <div className="col-xs-12">{product.product_name}</div>
                                                    <div className="col-xs-12">
                                                        <small>Quantity:
                                                            <button onClick={event => removeProductFromCart(product)}>
                                                                <FontAwesomeIcon
                                                                    icon={faMinus}/>
                                                            </button>
                                                            <span className="cart-item-font"> {product.quantity} </span>
                                                            <button onClick={event => addProductToCart(product)}>
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
                                        <input type="text" className="form-control" name="country"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6 col-xs-12">
                                        <strong>First Name:</strong>
                                        <input type="text" name="first_name" className="form-control"/>
                                    </div>
                                    <div className="span1"></div>
                                    <div className="col-md-6 col-xs-12">
                                        <strong>Last Name:</strong>
                                        <input type="text" name="last_name" className="form-control" value=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Address:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" name="address" className="form-control" value=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>City:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" name="city" className="form-control" value=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>State:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" name="state" className="form-control" value=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
                                    <div className="col-md-12">
                                        <input type="text" name="zip_code" className="form-control" value=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Phone Number:</strong></div>
                                    <div className="col-md-12"><input type="text" name="phone_number"
                                                                      className="form-control" value=""/></div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Email Address:</strong></div>
                                    <div className="col-md-12"><input type="text" name="email_address"
                                                                      className="form-control" value=""/></div>
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-info">
                            <div className="panel-heading"><span><i
                                className="glyphicon glyphicon-lock"></i></span> Secure Payment
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Card Type:</strong></div>
                                    <div className="col-md-12">
                                        <select id="CreditCardType" name="CreditCardType" className="form-control">
                                            <option value="5">Visa</option>
                                            <option value="6">MasterCard</option>
                                            <option value="7">American Express</option>
                                            <option value="8">Discover</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Credit Card Number:</strong></div>
                                    <div className="col-md-12"><input type="text" className="form-control"
                                                                      name="car_number" value=""/></div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12"><strong>Card CVV:</strong></div>
                                    <div className="col-md-12"><input type="text" className="form-control"
                                                                      name="car_code" value=""/></div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <strong>Expiration Date</strong>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <select className="form-control" name="">
                                            <option value="">Month</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <select className="form-control" name="">
                                            <option value="">Year</option>
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <span>Pay secure using your credit card.</span>
                                    </div>
                                    <div className="col-md-12">
                                        <ul className="cards">
                                            <li className="visa hand">Visa</li>
                                            <li className="mastercard hand">MasterCard</li>
                                            <li className="amex hand">Amex</li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <button onClick={event => placeOrder()} type="submit"
                                                className="btn btn-primary btn-submit-fix">Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row cart-footer">

            </div>
        </div>
    )
}
export default CheckOut;