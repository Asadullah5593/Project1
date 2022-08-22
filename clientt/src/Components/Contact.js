import React from 'react'

const contact = () => {
  return (
    <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div id="contact" class="contact-area section-padding">
	<div class="container">										
		<div class="section-title text-center">
			<h1>We'd Love To Hear From You!</h1>
			<p>If you have any queires or questions, a member of our staff will always be happy to help.
        Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible..</p>
		</div>					
		<div class="row">
			<div class="col-lg-7">	
				<div class="contact">
					<form class = 'form-type'>
						<div class="row">
							<div class="form-group col-md-6">
								<input class="contact-input-field" type="text" name="name" placeholder="First Name" required="required" />
							</div>
							<div class="form-group col-md-6">
								<input type="name" placeholder="Last Name" required="required" />
							</div>
							<div class="form-group col-md-12">
								<input type="email" name="email" placeholder="Email" required="required" />
							</div>
              <p class = "paragraph">Your information is fully confidental!</p>
							<div class="form-group col-md-12">
								<textarea rows="6" name="message" placeholder="Your Message" required="required"></textarea>
							</div>
							<div class="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-danger" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="single_address">
					<i class="fa fa-map-marker"></i>
					<h4>Our Address</h4>
					<p>3481 Melrose Place, Beverly Hills</p>
				</div>
				<div class="single_address">
					<i class="fa fa-envelope"></i>
					<h4>Send your message</h4>
					<p>Info@example.com</p>
				</div>
				<div class="single_address">
					<i class="fa fa-phone"></i>
					<h4>Call us on</h4>
					<p>(+1) 517 397 7100</p>
				</div>
				<div class="single_address">
					<i class="fa fa-clock-o"></i>
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