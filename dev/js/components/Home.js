import React from 'react';
import Clock from '../containers/Clock';
import Weather from '../containers/Weather';

const Home = () => {
	return (
		<div>
      <div className="row">
		  
      	<div className="four columns">
          <h1>dzd</h1>
        </div>
        <div className="eight columns">
          <Weather />
        </div>
        
      </div>
		</div>
	);
}

export default Home;