import React from 'react'
import {Router, Switch, Route} from 'react-router'

import Landing from './landing'

function requireAuth(nextState, replace, callback) {
    let notAuth = true
    try {
        notAuth = (localStorage.getItem('xaccess') === null )
    } catch (e) {
    } finally {
        if (notAuth) {
            replace({
                pathname: '/',
                state: { nextPathname: nextState.location.pathname }
            });
        }
        callback()
    }
}

function Root({history}) {
	return(
		<Router history={history}>
		 	<Switch>
            	<Route path="*" component={Landing} />    
   			</Switch>
       	</Router>
		)
}


export default Root