import React from 'react'
import Connect from '../connect'
import './style.css'

const Footer = (props) =>{
	const { footer } = props
	const socMedRendered = footer.get('socMed').map(( item, i ) => {
		return(
			<li key={i} ><a href={item.get('url')}>{ item.get('name') }</a></li>
		)
	})
	return(
		<div>
			<section className="module" id="contact">
	          <div className="container">
	            <div className="row">
	              <div className="col-sm-6 col-sm-offset-3">
	                <h2 className="module-title font-alt">{ footer.get('title') }</h2>
	                <div className="module-subtitle font-serif"></div>
	              </div>
	            </div>
	            <div className="row">
	              <div className="col-sm-6 col-sm-offset-3">
	                <form id="contactForm" role="form" method="post" action="php/contact.php">
	                  <div className="form-group">
	                    <label className="sr-only" for="name">Name</label>
	                    <input className="form-control" type="text" id="name" name="name" placeholder="Your Name*" required="required" data-validation-required-message="Please enter your name."/>
	                    <p className="help-block text-danger"></p>
	                  </div>
	                  <div className="form-group">
	                    <label className="sr-only" for="email">Email</label>
	                    <input className="form-control" type="email" id="email" name="email" placeholder="Your Email*" required="required" data-validation-required-message="Please enter your email address."/>
	                    <p className="help-block text-danger"></p>
	                  </div>
	                  <div className="form-group">
	                    <textarea className="form-control" rows="7" id="message" name="message" placeholder="Your Message*" required="required" data-validation-required-message="Please enter your message."></textarea>
	                    <p className="help-block text-danger"></p>
	                  </div>
	                  <div className="text-center">
	                    <button className="btn btn-block btn-round btn-d" id="cfsubmit" type="submit">Submit</button>
	                  </div>
	                </form>
	                <div className="ajax-response font-alt" id="contactFormResponse"></div>
	              </div>
	            </div>
	          </div>
	        </section>
	        <div className="module-small bg-dark">
	          <div className="container">
	            <div className="row">
	              <div className="col-sm-3">
	                <div className="widget">
		          		<img src="/assets/images/white.png" alt="Logo" className="proclub_logo" />
	                </div>
	              </div>
	              <div className="col-sm-3">
	                <div className="widget">
	                  <h5 className="widget-title font-alt">Address</h5>
	                  <p>
	                  	{ footer.get('address') }
	                  </p>
	                </div>
	              </div>
	              <div className="col-sm-3">
	                <div className="widget">
	                  <h5 className="widget-title font-alt">Email</h5>
	                  <p>{ footer.get('email') }</p>
	                </div>
	              </div>
	              <div className="col-sm-3">
	                <div className="widget">
	                  <h5 className="widget-title font-alt">Find Us in</h5>
	                  <ul className="widget-posts">
	                    {
	                    	socMedRendered
	                    }
	                  </ul>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	        <hr className="divider-d" />
	        <footer className="footer bg-dark">
	          <div className="container">
	            <div className="row">
	              <div className="col-sm-6">
	                <p className="copyright font-alt">&copy; 2017&nbsp;<a href="index.html">TitaN</a>, All Rights Reserved</p>
	              </div>
	              <div className="col-sm-6">
	                <div className="footer-social-links"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-dribbble"></i></a><a href="#"><i className="fa fa-skype"></i></a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </footer>
		</div>

	)
}

const states = {
	footer: '/landing/footer'
}

export default Connect(states) (Footer)