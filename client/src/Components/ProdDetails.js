import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getProductDetail} from "../ApiHelpers/ProductApiHelper";
import {toast} from "react-toastify";
import {addToCart, removeUserSession} from "../utils/cart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

const ProdDetails = () => {
    const {id} = useParams();

    const [product, setProduct] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFetching(true);
        getProductDetail(id).then((res) => {
            const {data} = res;
            if (data.status === true) {
                setProduct(data.product);
                setFetching(false);
            } else {
                toast.error(data.error)
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

    }, []);

    if (isFetching) {
        return <div>...Data Loading.....</div>;
    }


    return (
        <div id="prod-detail">
            <h2>{product.brand_name}</h2>
            <h4 className="prod-price"> ${product.price}</h4>
            <img src={product.image_url} width="18%" height="8%" alt="product1"/>
            <h2>Specifications..</h2>
            <ul>
                <h4>Brand: {product.brand_name}</h4>
                <h4>Name: {product.product_name}</h4>
                <h4>Specifications: {product.specifications}</h4>
                <h4>Model: {product.model}</h4>
                <h4>Color: {product.color}</h4>
                <button type="button" className="bg-cart"
                        onClick={event => addToCart(
                            {
                                "product_id": product._id, "price": product.price, "product_name": product.product_name,
                                "product_brand": product.brand_name, "product_image": product.image_url
                            },
                            toast.success("Product added to cart successfully")
                        )}>
                    <FontAwesomeIcon icon={faCartPlus} mr-2/> Add to cart
                </button>
            </ul>
        </div>
    )
}
export default ProdDetails;