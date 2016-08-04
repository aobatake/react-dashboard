const moment = require('moment');
import axios from 'axios';

export const momentFired = () => {
	return { 
		type: "MOMENT_FIRED", 
		payload: [
			moment().format(" h:mm:ss a"),
			moment().format("MMMM Do, YYYY")
		]
	}
}

function geoCallback(latitude, longitude,dispatch){
  let weatherLink = "http://api.openweathermap.org/data/2.5/weather?";
  let lat = "lat=" + latitude + "&";  
  let long = "lon=" + longitude;
  let units = '&units=imperial'
  let apiKey = "&APPID=e952942b222e53f714eb89aeb105b918";  

  let weatherApi = weatherLink + lat + long + units + apiKey;
  console.log(weatherApi);

  axios.get(weatherApi)
  .then((response) => {
    dispatch(successWeather(response));
  }) 
  .catch((err)=> {
    dispatch({type:"ERROR_WEATHER" , payload: err})
  })
}

export const requestWeather = (dispatch) => {
  dispatch({type: "REQUEST_WEATHER"})
  let longitude ='';
  let latitude = '';

  if(navigator && navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition((pos)=>{
      let crds = pos.coords;
      latitude = crds.latitude;
      longitude = crds.longitude;  
      geoCallback(latitude,longitude,dispatch);
    }, (dispatch,err)=>{dispatch({type:"ERROR_WEATHER" , payload: err})})      
  }
}



function successWeather(json){
  return {
    type:"RECEIVED_WEATHER",
    payload: json.data
  }
}

