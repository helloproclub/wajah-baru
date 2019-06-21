import React from 'react'
import Connect from '../connect'
import './style.css'

import Header from './header'
import Works from './works'
import Footer from './footer'

const Login = (props) =>{
	
	return(
		<main>
	     	<Header />
	     	<Works />
	     	<Footer />
      		<div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up">aasdf</i></a></div>
    	</main>	
	)
}

const states = {
	menus: '/landing/menus'
}

export default Connect(states) (Login)