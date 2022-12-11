import React, {useEffect, useState} from 'react'
import homepic1 from '../images/homepic1.webp'
import homepic2 from '../images/homepic2.jpg'
import {getAllProducts} from "../ApiHelpers/ProductApiHelper";
import {toast} from "react-toastify";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        getAllProducts().then((res) => {
            const {data} = res;
            if (data.status === true) {
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
        <div>
            <div className="container marketing">
                <hr className="featurette-divider"/>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Purchase Mobile Phone. <span className="text-muted">According to your needs.</span>
                        </h2>
                        <p className="lead">We sell mobile phone with mind blowing features and price.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={homepic1} className="bd-placeholder-img" role="img" alt="homepic1"></img>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-5 order-md-1">
                        <img src={homepic2} className="bd-placeholder-img" role="img" alt="homepic2"></img>
                    </div>
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Sell your Mobile Phone. <span className="text-muted">On a very reasonable price. </span>
                        </h2>
                        <p className="lead">We will be please to buy your old mobile phones at very good prices.</p>
                    </div>

                </div>

                <hr className="featurette-divider"/>
            </div>


            <h1 className="prod-heading">PRODUCTS</h1>
            {
                products.map((product) => (
                    <div className="col-md-3 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-img-actions">
                                    <a href={`product-details/${product._id}`}><img src={product.image_url}
                                                                                    className="card-img img-fluid"
                                                                                    width="96" height="35"
                                                                                    alt="product1"/></a>
                                </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2">
                                        <h4>{product.brand_name}</h4>
                                        <a className="text-default mb-2">{product.specifications}</a>
                                    </h6>
                                </div>
                                <h3 className="mb-0 font-weight-semibold">${product.price}</h3>
                                <a className="prod-detail-btn" href={`product-details/${product._id}`}>More Details</a>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="home-prod-div">
                <a className="home-prod-btn btn btn-danger" href="/products">
                    <h3 className="prod-btn-h3">Show All Products!</h3>
                </a>
            </div>
        </div>

    )
}

export default Home