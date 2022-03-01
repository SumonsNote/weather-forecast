const API_KEY = `e1eaeb4e8a65df813d779afc8357c406`;

const weatherForecast = () => {
  const city = document.getElementById("city-name").value;
  document.getElementById("city-name").value = "";
  document.getElementById("input-city").style.display = "none";
  if (!city) {
    document.getElementById("input-city").style.display = "block";
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayWeatherForecast(data));
  }
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayWeatherForecast = (forecast) => {
  setInnerText("city", forecast.name);
  setInnerText("temp", forecast.main.temp);
  setInnerText("condition", forecast.weather[0].main);

  // set url
  const url = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("forecastIcon");
  imgIcon.setAttribute("src", url);
};
