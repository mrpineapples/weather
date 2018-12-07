import React from "react";
import "./LocalWeather.css"

class LocalWeather extends React.Component {
  render() {
    return (
      <div className="weather-info">
        <p id="city">{this.props.cityName}</p>
        <br></br>
        <p id="temperature">{Math.round(this.props.temp)}&#8457;</p>
        <br></br>
        {/* <p id="end">Try another city!</p> */}
      </div>
    );
  };
};

export default LocalWeather;
