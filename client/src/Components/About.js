import React from 'react'
import about_pic from '../images/about.pic.jpg'

const about = () => {
  return (
<><section id="about-section" className="pt-5 pb-5">
  <div className="container wrapabout">
    <div className="red"></div>
    <div className="row">
      <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
        <div className="blockabout">
          <div className="blockabout-inner text-center text-sm-start">
            <div className="title-big pb-3 mb-3">
              <h3>ABOUT US</h3>
            </div>
            <p className="description-p text-muted pe-0 pe-lg-0">
            Our bespoke classifieds portals are some of the strongest brands in our markets, 
            which primarily constitute the MENA, South Asia and Southeast Asia regions.
             Our flagship ventures are Bayut-Dubizzle in the UAE, Zameen in Pakistan, OLX in Pakistan
             and Egypt, Lamudi in Indonesia, Philippines and Mexico, Mubawab in North Africa,
             and Kaidee in Thailand.
            </p>
            <p className="description-p text-muted pe-0 pe-lg-0">
            The 217 million monthly visits across our portals are a 
            testament to our user's trust and a source of unparalleled value to advertisers.
            </p>
            <div className="sosmed-horizontal pt-3 pb-3">
              <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/accounts/login/"><i className="fa fa-instagram"></i></a>
              <a href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
            </div>
            <a href="/" className="btn rey-btn mt-3">See More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-5 mt-lg-0">
        <figure className="potoaboutwrap">
        <img src={about_pic} alt="mobpic"/>
        </figure>
      </div>
    </div>
  </div>
</section></>
)
}

export default about