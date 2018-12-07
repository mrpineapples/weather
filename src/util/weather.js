const apiKey = "6bc419210c3ea7f4e7ffd9ef519365c7";

const weather = city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`

  return fetch(url).then(response => {
    return response.json();
  })
  .then(data => {
    return {
      temp: data.main.temp,
      name: data.name,
      condition: data.weather[0].main,
      icon: data.weather[0].icon
    }
  })
  .catch(err => {
    if (err) {
      alert("No abbreviations, please enter full city name")
    }
  })
};

export default weather;
