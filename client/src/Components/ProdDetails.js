import {useParams} from "react-router-dom";
import product1pic from "../images/product1.png"
import React, {useEffect, useState} from "react";
import {getProductDetail} from "../ApiHelpers/ProductApiHelper";
import {toast} from "react-toastify";

const ProdDetails = () => {
    const {id} = useParams();

    const [product, setProduct] = useState([]);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        getProductDetail(id).then((res) => {
            const {data} = res;
            if(data.success === true){
                setProduct(data.product);
                setFetching(false);
            }
            else{
                toast.error(data.error)
            }
        }).catch((e) =>{
            toast.error(e.message)
        })
        ;
    }, []);

    if (isFetching) {
        return <div>...Data Loading.....</div>;
    }


    return (
        <div id="prod-detail">
            <h2>{product.brand_name}</h2>
            <p className="prod-price"> ${product.price}</p>
            <img src={product.image_url} width="18%" height="8%" alt="product1"/>
            <h2>Specifications..</h2>
            <ul>
                <h4>Model: {product.model}</h4>
                <h4>Color: {product.color}</h4>
            </ul>
        </div>
    )
}
export default ProdDetails;