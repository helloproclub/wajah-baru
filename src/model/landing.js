const initialState = {
	title: 'Welcome to Proclub',
	menus: ["Home","About","Contact Us"],
	desc: {
		title: 'Proclub',
		university: "Telkom University",
		text: "A brotherhood of highly passionate and competitive student in Telkom University. A group of enthusiastic people in tech, business, design, and innovation."		
	},
	portofolio: {
		title: 'The Output',
		tags: ["Web Dev","Mobile Web","Contest"],
		items: [
			{
				title: 'Corporate Identity',
				desc: 'Illustration',
				image: 'https://images.unsplash.com/photo-1561045859-8df6677193d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
			},
			{
				title: 'Identity',
				desc: 'Marketing',
				image: 'https://images.unsplash.com/photo-1465426721606-27b1239015fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
			},
			{
				title: 'Corporate',
				desc: 'Web Dev',
				image: 'https://images.unsplash.com/photo-1517999586990-2126f2b0c97d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
			},
		]
	},
	footer: {
		title: 'Interested ?',
		address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		email: 'helloproclub@gmail.com',
		socMed: [
			{
				name: 'Medium',
				url: ''
			},
			{
				name: 'Instagram',
				url: ''
			},
			{
				name: 'Facebook',
				url: ''
			},
		]
	}
}

const events = {

}

export default {
	initialState, events
}