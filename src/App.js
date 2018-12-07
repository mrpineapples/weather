import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar"
import LocalWeather from "./components/LocalWeather";
import Picture from "./components/Picture";
import pix from "./util/pixabay"
import weather from "./util/weather"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: "Submit",
      name: "",
      temperature: "",
      condition: "",
      value: "",
      bg: "",
      icon: ""
    }
  }

  componentDidMount = () => {
    weather("New York").then(data => {
      this.setState({
        name: data.name,
        temperature: data.temp,
        condition: data.condition,
        icon: data.icon
      })
    })
    pix("New York City").then(data => {
      this.setState({
        bg: data[Math.floor(Math.random() * data.length)]
      })
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    weather(this.state.value).then(data => {
      this.setState({
        name: data.name,
        temperature: data.temp,
        condition: data.condition,
        icon: data.icon,
        value: ""
      })
    });
    pix(`${this.state.value} city`).then(data => {
      this.setState({
        bg: data[Math.floor(Math.random() * data.length)]
      })
    });
    this.resetInput();
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  resetInput = () => {
    document.getElementById("textbox").reset();
  }

  render() {
    document.body.style.backgroundImage = `url(${this.state.bg})`;
    return (
      <div className="App">
        <SearchBar submission={this.handleSubmit} changeCity={this.handleChange} buttonValue={this.state.buttonState} />
        <LocalWeather cityName={this.state.name}
          temp={this.state.temperature} />
        <Picture condition={this.state.condition} weatherIcon={this.state.icon} />
        <p id="end">Try another city!</p>
      </div>
    );
  }
}

export default App;
