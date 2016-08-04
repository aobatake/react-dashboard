import React , {Component} from 'react';
import {connect} from 'react-redux';
import {momentFired} from '../actions';
require('../../scss/clock.scss')

class Clock extends Component {
	
	componentDidMount() {
		setInterval(()=>{
				this.props.dispatch(momentFired())
		}, 1000)
	}

	render(){
		return(
			<div className="moment">
				<h1>{this.props.moment[0]}</h1>
				<h3>{this.props.moment[1]}</h3>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		moment: state.moment
	}
}

export default connect(mapStateToProps)(Clock);