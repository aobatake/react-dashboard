import {combineReducers} from 'redux';
import momentReducer from './moment-reducer';
import weatherReducer from './weather-reducer';

const allReducers = combineReducers({
	moment: momentReducer,
  weather: weatherReducer
})

export default allReducers;