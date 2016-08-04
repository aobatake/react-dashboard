const moment = require('moment');

export default function(
	state = [
		moment().format(" h:mm:ss a"),
		moment().format("MMMM Do, YYYY")
	], 
	action){
	switch(action.type){
		case "MOMENT_FIRED":
			return action.payload;
		default:
			return state;
	}
}