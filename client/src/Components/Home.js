import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import homepic1 from '../images/homepic1.webp'
import homepic2 from '../images/homepic2.jpg'
import image1 from '../images/Image1.webp'
import slide1 from '../images/slide1.webp'
import slide2 from '../images/slide2.webp'
import product1pic from "../images/product1.png";
const Home = () => {
  return (
  <div><Carousel fade>
    <Carousel.Item>
      <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
          src={slide1}
          alt="Second slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide2}
          alt="Third slide"
      />
      </Carousel.Item>
  </Carousel>




  <div className="container marketing">


    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Purchase Mobile Phone. <span className="text-muted">According to your needs.</span></h2>
        <p className="lead">We sell mobile phone with mind blowing features and price.</p>
      </div>
      <div className="col-md-5">
      <img src={homepic1} className="bd-placeholder-img" role="img" alt="homepic1"></img>
      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">Sell your Mobile Phone. <span className="text-muted">On a very reasonable price. </span></h2>
        <p className="lead">We will be please to buy your old mobile phones at very good prices.</p>
      </div>
      <div className="col-md-5 order-md-1">
      <img src={homepic2} className="bd-placeholder-img" role="img" alt="homepic2"></img>
      </div>
    </div>

    <hr className="featurette-divider"/>
  </div>


    <h1 className="prod-heading">PRODUCTS</h1>

    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>
          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>



    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>



    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>



    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>
          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>
          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>

    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>
          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>

    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>
          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>

    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>
          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>
          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img src={product1pic} className="card-img img-fluid" width="96" height="35" alt="product1"/>
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <h4>VIVO</h4>
              <a className="text-default mb-2">Vivo A-50 With 4 GB Extended Ram</a>
            </h6>
          </div>
          <h3 className="mb-0 font-weight-semibold">$25.89</h3>


          <a className="prod-detail-btn" href="/product-details">More Details</a>
        </div>
      </div>
    </div>


    <div className="home-prod-div"><a className="home-prod-btn btn btn-danger" href="/Products"><h3 className="prod-btn-h3">Show All Products!</h3></a></div>


    <footer className="container">
      <p className="float-end"><a href="#">Back to top</a></p>
      <p>&copy; 2022–2026 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>

  </div>

  )
}

export default Home