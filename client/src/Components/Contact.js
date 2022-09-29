import React from 'react'

const contact = () => {
  return (
    <div>
<div id="contact" className="contact-area section-padding">
	<div className="container">
		<div className="section-title text-center">
			<h1>We'd Love To Hear From You!</h1>
			<p>If you have any queires or questions, a member of our staff will always be happy to help.
        Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible..</p>
		</div>					
		<div className="row">
			<div className="col-lg-7">
				<div className="contact">
					<form className = 'form-type'>
						<div className="row">
							<div className="form-group col-md-6">
								<input className="contact-input-field" type="text" name="name" placeholder="First Name" required="required" />
							</div>
							<div className="form-group col-md-6">
								<input type="name" placeholder="Last Name" required="required" />
							</div>
							<div className="form-group col-md-12">
								<input type="email" name="email" placeholder="Email" required="required" />
							</div>
              <p className = "paragraph">Your information is fully confidental!</p>
							<div className="form-group col-md-12">
								<textarea rows="6" name="message" placeholder="Your Message" required="required"></textarea>
							</div>
							<div className="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-danger" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-5">
				<div className="single_address">
					<i className="fa fa-map-marker"></i>
					<h4>Our Address</h4>
					<p>3481 Melrose Place, Beverly Hills</p>
				</div>
				<div className="single_address">
					<i className="fa fa-envelope"></i>
					<h4>Send your message</h4>
					<p>Info@example.com</p>
				</div>
				<div className="single_address">
					<i className="fa fa-phone"></i>
					<h4>Call us on</h4>
					<p>(+1) 517 397 7100</p>
				</div>
				<div className="single_address">
					<i className="fa fa-clock-o"></i>
					<h4>Work Time</h4>
					<p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
				</div>					
			</div> 
		</div>
	</div>	
</div>
    </div>
  )
}

export default contact