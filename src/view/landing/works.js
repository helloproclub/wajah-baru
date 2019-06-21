import React from 'react'
import Connect from '../connect'
import './style.css'

const Works = (props) =>{
	const { portofolio } = props
	const tagsRendered = portofolio.get('tags').map(( item, i ) => {
		return <li key={ i }><div className="wow fadeInUp" data-wow-delay="0.2s">{ item }</div></li>
	})
	const itemsRendered = portofolio.get('items').map(( item, i ) => {
		return(
			<li className="work-item illustration webdesign" key={ i }><a href="/">
		        <div className="work-image"><img src={ item.get('image') } alt={ item.get('title') }/></div>
		        <div className="work-caption font-alt">
		          <h3 className="work-title">{ item.get('title') }</h3>
		          <div className="work-descr">{ item.get('desc') }</div>
		        </div></a>
	        </li>
		)
	})
	return(
		<div>
			<section className="module pb-0" id="works">
			  <div className="container">
			    <div className="row">
			      <div className="col-sm-6 col-sm-offset-3">
			        <h2 className="module-title font-alt">{ portofolio.get('title') }</h2>
			        <div className="module-subtitle font-serif"></div>
			      </div>
			    </div>
			  </div>
			  <div className="container">
			    <div className="row">
			      <div className="col-sm-12">
			        <ul className="filter font-alt" id="filters">
			          <li><div className="current wow fadeInUp" >All</div></li>
			          { tagsRendered }
			        </ul>
			      </div>
			    </div>
			  </div>
			  <ul className="works-grid works-grid-gut works-grid-3 works-hover-w" id="works-grid">
			    { itemsRendered }
			  </ul>
			</section>
		</div>
	)
}

const states = {
	menus: '/landing/menus',
	portofolio: '/landing/portofolio'
}

export default Connect(states) (Works)