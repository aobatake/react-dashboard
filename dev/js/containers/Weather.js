import React , {Component} from 'react';
import {connect} from 'react-redux';
import {requestWeather} from '../actions';
import {bindActionCreators} from 'redux';
import moment from 'moment';
require('../../scss/weather.scss');
require('../../scss/weather-icons/weather-icons.scss');



class Weather extends Component {
  
    getMainSymbol(){
      const {weatherData} = this.props;
      const data = weatherData.data;
      
      const dataTime = parseInt(moment.unix(data.dt).format('Hmm'));
      const sunRise = parseInt(moment.unix(data.sys.sunrise).format('Hmm'));
      const sunSet = parseInt(moment.unix(data.sys.sunset).format('Hmm'));

      //console.log(dataTime);
      //console.log(sunRise);
      //console.log(sunSet);

      let symbolName ='wi wi-owm-' ;
      
      const beforeSun = dataTime < sunRise;
      const inSun = dataTime > sunRise && dataTime < sunSet;
      const afterSun = dataTime > sunSet;

      switch(true){
        case beforeSun:
          symbolName += 'night-';
          break;
        case inSun:
          symbolName += 'day-';
          break;
        case afterSun: 
          symbolName += 'night-';
          break;
      }

      symbolName += data.weather[0].id;
      symbolName += ' weather-main-icon'
      return(
        <i className={symbolName}></i>
      );
    }

    getWindSymbol(){
      const {weatherData} = this.props;
      const data = weatherData.data;
      const windAngle = Math.floor(parseInt(data.wind.deg));
      windAngle.toString();
      let symbolName = 'wi wi-wind from-' + windAngle + '-deg' + ' wind-icon';
      return(
        <i className={symbolName}></i>
      );
    }

    currentWeather(){
      const {weatherData} = this.props;
      const data = weatherData.data;
      return (
        <div className="weatherbox">
          <h2 className="weather-title"> Current Weather in {data.name}: </h2>
          <h3 className="weather-date"> {moment.unix(data.dt).format('dddd: h:mm:ss a')}</h3>
           <div className="row"> 
            <div className="six columns weather-main-container">
              {this.getMainSymbol()} 
              <div>
                <h1>{data.weather[0].main}</h1>   
                <h3><i>{data.weather[0].description}</i></h3>
              </div>
            
            </div>
            <div className="six columns">
              <h4>Wind {this.getWindSymbol()} : {data.wind.speed} mph , {Math.floor(data.wind.deg)}<i className="wi wi-degrees"></i> </h4>            
              <h4>Temperature <i className="wi wi-thermometer temp-icon"></i> : {data.main.temp}<i className="wi wi-fahrenheit"></i></h4>
              <h4>Humidity <i className="wi wi-humidity humidity-icon"></i> : {data.main.humidity}% </h4>
              <h4>Pressure <i className="wi wi-barometer pressure-icon"></i> : {data.main.pressure} Pa</h4>
            </div>
          </div>
        </div>
      );
    }

  componentDidMount() {
    this.props.dispatch(requestWeather);      
  }

  render(){

    const {weatherData, dispatch} = this.props;

    if(weatherData.fetching === true){
      return (<h1>Loading . . .</h1>)
    }

    if(weatherData.fetching === false && weatherData.fetched === false){
      return(<h1>Error</h1>)
    }

    return (
      <div className="">
        {this.currentWeather()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    weatherData: state.weather,
  };
}


export default connect(mapStateToProps)(Weather);