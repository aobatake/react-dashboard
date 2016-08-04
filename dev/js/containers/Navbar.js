import React , {Component} from 'react';
import {Link} from 'react-router';
require('../../scss/navbar.scss');

class Navbar extends Component {
	render(){
		return (
			<nav >
				<ul> 
					<li><Link to='/'>Home</Link></li>       
					<li><Link to='/social'>Social</Link></li>
				</ul>	
			</nav>
		);
	}
}

export default Navbar;