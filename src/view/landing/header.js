import React from 'react'
import Connect from '../connect'

const Header = (props) => {
	const { menus, desc } = props
	const listRendered = menus.map(( item, i ) => {
		return <li key={ i }><a href="/" >{ item }</a></li>
	})
	return(
		<div>
			<nav className="navbar navbar-custom navbar-fixed-top navbar-transparent" role="navigation">
		        <div className="container">
		          <div className="navbar-header">
		            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand" href="index.html">{ desc.get('title') }</a>
		          </div>
		          <div className="collapse navbar-collapse" id="custom-collapse">
		            <ul className="nav navbar-nav navbar-right">
		              { listRendered }
		            </ul>
		          </div>
		        </div>
		      </nav>
		      <section className="home-section home-parallax home-fade home-full-height bg-dark-30 bg_images" id="home">
		        <div className="titan-caption">
		          <div className="caption-content">
		          	<img src="/assets/images/white.png" alt="Logo" className="proclub_logo" />
		            <div className="font-alt mb-30 titan-title-size-2">{ desc.get('university') }</div>
		            <div className="font-alt mb-40 titan-title-size-1 header_desc">
		            	{ desc.get('text') }
		            </div><a className="section-scroll btn btn-border-w btn-round" href="#about">Learn More</a>
		          </div>
		        </div>
		      </section>
		</div>
	)
}

const states = {
	menus: '/landing/menus',
	desc: '/landing/desc'
}

export default Connect(states) (Header)