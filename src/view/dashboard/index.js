import React from 'react'
import Layout from '../layout'
import './style.css'
import Connect from '../connect'
import Button from '../component/button'

const Login = (props) =>{
	console.log(props)
	return(
		<Layout>
			<div className='dashboard_wrapper'>
				tes
				<Button content="Back"
						Action={props.ToLogin}/>
			</div>
		</Layout>
		)
}

const states = {
	contoh: 'contoh'
}

const actions = {
	ToLogin: () => (['push','/'])
}

export default Connect(states, actions)(Login)