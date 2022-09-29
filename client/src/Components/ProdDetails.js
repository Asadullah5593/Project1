import product1pic from "../images/product1.png"
import React from "react";
const ProdDetails = () => {
    return (
        <div id="prod-detail">
            <h2>VIVO A-50</h2>
            <p className="prod-price">Rs 208,999</p>
            <p className="prod-price">USD $1039</p>
            <img src={product1pic} width="18%" height="8%" alt="product1"/>
            <h3>Specifications..</h3>
            <ul>
            <li>Process = Octa-core (1 x 3.00 GHz Cortex-X2 + 3 x 2.50 GHz Cortex-A710 + 4 x 1.80 GHz Cortex-A510)</li>
            <li>Protection = Corning Gorilla Glass Victus </li>
            <li>Memory = 128/256GB Built-in, 8/12GB RAM</li>
            <li>Colors = Gray, Blue, Purple, Green</li>
            <li>Price = Price in Rs: 208,999  /  Price in USD: $1039</li>
            <li>Ratings = Average Rating is 1 stars - based on 9 user reviews.</li>
            </ul>
        </div>
    )}
export default ProdDetails;