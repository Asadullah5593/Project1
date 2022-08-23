import React from 'react'
import about_pic from '../images/homeabout.jpg'
import contact_pic from '../images/homecontact.webp'
import login_pic from '../images/homelogin.png'
import homepic1 from '../images/homepic1.webp'
import homepic2 from '../images/homepic2.jpg'
const Home = () => {
  return (
  <div>
<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"/>

  <div class="container marketing">

    <div class="row">
      <div class="col-lg-4">
      <img src={about_pic} class="bd-placeholder-img rounded-circle" width="140" height="140" role="img"></img>

        <h2>About Us</h2>
        <p>Know about us by clicking here and dicover more fantastic facts!!</p>
        <p><a class="btn btn-secondary" href="/about">About &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <img src={contact_pic} class="bd-placeholder-img rounded-circle" width="140" height="140" role="img"></img>

        <h2>Contact Us</h2>
        <p>For more information and queries, contact us by clicking here!!</p>
        <p><a class="btn btn-secondary" href="/Contact">Contact &raquo;</a></p>
      </div>
      <div class="col-lg-4">
      <img src={login_pic} class="bd-placeholder-img rounded-circle" width="140" height="140" role="img"></img>


        <h2>Log In</h2>
        <p>To see the latest products and get updated about every little detail, log in today!!</p>
        <p><a class="btn btn-secondary" href="/Login">Login &raquo;</a></p>
      </div>
    </div>


    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Purchase Mobile Phone. <span class="text-muted">According to your needs.</span></h2>
        <p class="lead">We sell mobile phone with mind blowing features and price.</p>
      </div>
      <div class="col-md-5">
      <img src={homepic1} class="bd-placeholder-img" role="img"></img>
      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Sell your Mobile Phone. <span class="text-muted">On a very reasonable price. </span></h2>
        <p class="lead">We will be please to buy your old mobile phones at very good prices.</p>
      </div>
      <div class="col-md-5 order-md-1">
      <img src={homepic2} class="bd-placeholder-img" role="img"></img>
      </div>
    </div>

    <hr class="featurette-divider"/>  
  </div>

  <footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2022–2026 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
<main/>


    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

    </div>
  )
}

export default Home