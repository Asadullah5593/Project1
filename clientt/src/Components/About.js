import React from 'react'
import about_pic from '../images/about.pic.jpg'

const about = () => {
  return (
<><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /><section id="about-section" class="pt-5 pb-5">
  <div class="container wrapabout">
    <div class="red"></div>
    <div class="row">
      <div class="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
        <div class="blockabout">
          <div class="blockabout-inner text-center text-sm-start">
            <div class="title-big pb-3 mb-3">
              <h3>ABOUT US</h3>
            </div>
            <p class="description-p text-muted pe-0 pe-lg-0">
            Our bespoke classifieds portals are some of the strongest brands in our markets, 
            which primarily constitute the MENA, South Asia and Southeast Asia regions.
             Our flagship ventures are Bayut-Dubizzle in the UAE, Zameen in Pakistan, OLX in Pakistan
             and Egypt, Lamudi in Indonesia, Philippines and Mexico, Mubawab in North Africa,
             and Kaidee in Thailand.
            </p>
            <p class="description-p text-muted pe-0 pe-lg-0">
            The 217 million monthly visits across our portals are a 
            testament to our user's trust and a source of unparalleled value to advertisers.
            </p>
            <div class="sosmed-horizontal pt-3 pb-3">
              <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/accounts/login/"><i class="fa fa-instagram"></i></a>
              <a href="https://www.pinterest.com/"><i class="fa fa-pinterest"></i></a>
            </div>
            <a href="/" class="btn rey-btn mt-3">See More</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mt-5 mt-lg-0">
        <figure class="potoaboutwrap">
        <img src={about_pic} alt="mobpic"/>
        </figure>
      </div>
    </div>
  </div>
</section></>
)
}

export default about