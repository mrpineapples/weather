import React from "react";
import "./Picture.css"

class Picture extends React.Component {
  render() {
    return (
      <div className="forecast">
        <img id="icon" src={`http://openweathermap.org/img/w/${this.props.weatherIcon}.png`} />
        <p id="words">{this.props.condition}</p>
      </div>
    );
  };
};

export default Picture;
