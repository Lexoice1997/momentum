const weatherIcon = document.querySelector('.weather-icon'),
      temperature = document.querySelector('.temperature'),
      weatherDescription = document.querySelector('.weather-description'),
      wind = document.querySelector('.wind'),
      humidity = document.querySelector('.humidity'),
      city = document.querySelector('.city');

city.addEventListener('change', getWeather);

async function getWeather() {
  function setLocalStorage() {
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }

    getWeather()
  }
  window.addEventListener('load', getLocalStorage)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  let temp = Math.round(data.main.temp);
  let windSpeed = Math.round(data.wind.speed);

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${windSpeed} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

export default getWeather;