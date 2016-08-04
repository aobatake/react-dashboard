import React from 'react';
import Clock from '../containers/Clock';
import Navbar from '../containers/Navbar';
require('../../scss/skeleton.scss');

class Layout extends React.Component{
	render(){
		return(
			<div>
				<Navbar />
				{this.props.children}
				
			</div>
		);
	}
}  


export default Layout;