const city = 'Lviv';
const apiKey = "5d066958a60d315387d9492393935c19";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + apiKey;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherIconUrl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

    const weatherInfoArray = [
      { name: "City", value:city },
      { name: "Temperature", value: data.main.temp + "°C" },
      { name: "Pressure", value: data.main.pressure + " hPa" },
      { name: "Description", value: data.weather[0].description },
      { name: "Humidity", value: data.main.humidity + "%" },
      { name: "Wind Speed", value: data.wind.speed + " m/s" },
      { name: "Wind Direction", value: data.wind.deg + "°" }
    ];

 
    const weatherInfoContainer = document.getElementById("weather-info");
    weatherInfoArray.forEach(info => {
      const infoElement = document.createElement("p");
      infoElement.textContent = `${info.name}: ${info.value}`;
      weatherInfoContainer.appendChild(infoElement);
    });

    const weatherIconContainer = document.getElementById("weather-icon");
    const weatherIcon = document.createElement("img");
    weatherIcon.src = weatherIconUrl;
    weatherIcon.alt = "Weather Icon";
    weatherIconContainer.appendChild(weatherIcon);
  })
  .catch(error => console.error('Error:', error));